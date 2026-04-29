import { DanceData } from './types';

export const DANCE_DATA: DanceData = {
  classical: [
    {
      name: "Bharatnatyam",
      origin: "Tamil Nadu",
      feature: "Sadir, Fire Dance, Temple roots",
      artist: "Rukmini Devi, Yamini Krishnamurthy",
      element: "Fire"
    },
    {
      name: "Kathak",
      origin: "Uttar Pradesh",
      feature: "Tatkar (Footwork), Chakkars",
      artist: "Pt. Birju Maharaj, Sitara Devi",
    },
    {
      name: "Kathakali",
      origin: "Kerala",
      feature: "Mask/Drama, Green Make-up (Vesham)",
      artist: "Kalamandalam Gopi",
    },
    {
      name: "Kuchipudi",
      origin: "Andhra Pradesh",
      feature: "Tarangam (Brass Plate dance)",
      artist: "Raja & Radha Reddy",
    },
    {
      name: "Odissi",
      origin: "Odisha",
      feature: "Tribhanga Posture, Sculpturesque poses",
      artist: "Kelucharan Mohapatra, Sonal Mansingh",
      element: "Water"
    },
    {
      name: "Manipuri",
      origin: "Manipur",
      feature: "Raas Leela, Soft movements",
      artist: "Guru Bipin Singh",
    },
    {
      name: "Mohiniyattam",
      origin: "Kerala",
      feature: "Graceful/Lasya, 'Dance of the Enchantress'",
      artist: "Sunanda Nair",
    },
    {
      name: "Sattriya",
      origin: "Assam",
      feature: "Vaishnavite origin, Monastic roots",
      artist: "Srimanta Sankardev (Founder)",
    }
  ],
  folk: [
    { region: "North", dances: ["Bhangra (PN)", "Rouf (J&K)"] },
    { region: "West", dances: ["Garba (GJ)", "Lavani (MH)"] },
    { region: "East", dances: ["Bihu (AS)", "Chhau (WB/OD)"] },
    { region: "South", dances: ["Yakshagana (KA)", "Karakattam (TN)"] },
    { region: "Central", dances: ["Matki (MP)", "Gaur Maria (CG)"] },
    { region: "Rajasthan", dances: ["Kalbelia", "Ghoomar"] }
  ]
};
