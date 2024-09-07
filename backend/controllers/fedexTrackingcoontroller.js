import axios from "axios";

const authFedex = async () => {
  try {
    // Input Data
    const inputPayload = {
      grant_type: "client_credentials",
      client_id: process.env.FEDEX_API_KEY,
      client_secret: process.env.FEDEX_SECRET_KEY,
    };
    // Headers
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await axios.post(
      `${process.env.FEDEX_BASE_API_URL}/oauth/token`,
      inputPayload,
      { headers: headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error authenticating with FedEx API:", error);
    throw new Error("Failed to authenticate with FedEx API");
  }
};

class FedexTrackingController {
  static getTracking = async (req, res) => {
    try {
      const authResponse = await authFedex();
      const { trackingNumber } = req.body;
      // Input Data
      const inputPayload = {
        includeDetailedScans: true,
        trackingInfo: [
          {
            trackingNumberInfo: {
              trackingNumber: trackingNumber,
            },
          },
        ],
      };
      const headers = {
        "Content-Type": "application/json",
        "X-locale": "en_US",
        Authorization: `Bearer ${authResponse.access_token}`,
      };
      const response = await axios.post(
        `${process.env.FEDEX_BASE_API_URL}/track/v1/trackingnumbers`,
        inputPayload,
        { headers: headers }
      );

      const trackingDetails =
        response.data.output.completeTrackResults[0].trackResults[0].scanEvents.map(
          (item) => ({
            eventDescription: item.eventDescription,
            city: item.scanLocation.city,
          })
        );
      res.send(trackingDetails);
    } catch (error) {
      console.error("Error tracking FedEx shipment:", error);
      res.status(500).send("Failed to track FedEx shipment");
    }
  };
}

export default FedexTrackingController;






// import axios from "axios";

// const fedxauth = async (req, res) => {
//   try {
//     const inputpayload = {
//       grant_type: "client_credentials",
//       client_id: process.env.FEDEX_API_KEY,
//       client_secret: process.env.FEDEX_SECRET_KEY,
//     };

//     const header = {
//       "Content-Type": "application/x-www-form-urlencoded",
//     };
//     const response = await axios.post(
//       `${process.env.FEDEX_BASE_API_URL}/oauth/token`,
//       inputpayload,
//       { headers: header }
//     );
//     return response.data;
    
//   } catch (error) {
//     console.error("Error in fedxauth", error);
//     throw new Error("failed to authenticate with fedex");
//   }
// };

// class FedexTrackingController {
//   static getTracking = async (req, res) => {
//     const authresponse = await fedxauth();

//     try {
//       const authresponse = await fedxauth();

//       const inputpayload = {
//         includeDetailedScans: true,
//         trackingInfo: [
//           {
//             trackingNumberInfo: {
//               trackingNumber: "070358180009382",
//             },
//           },
//         ],
//       };
//       const header = {
//         "Content-Type": "application/json",
//         "X-locale": "en_US",
//         "Xuthorization": `Bearer ${authresponse.access_token}`,
//       };
//         const response = await axios.post(
//             `${process.env.FEDEX_BASE_API_URL}/tracking/v1/track`,
//             inputpayload,
//             { headers: header }
//         );

//         const trackingDetails =
//         response.data.output.completeTrackResults[0].trackResults[0].scanEvents.map(
//           (item) => ({
//             eventDescription: item.eventDescription,
//             city: item.scanLocation.city,
//           })
//         );
//       res.send(trackingDetails);
        
//     } catch (error) {
//         console.error("Error tracking FedEx shipment:", error);
//         res.status(500).send("Failed to track FedEx shipment");
//     }
//   };
// }

// export default FedexTrackingController;
