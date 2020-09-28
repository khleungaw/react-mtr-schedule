export const lineNames: {[index: string]: string} = {
  "AEL": "Airport Express",
  "TCL": "Tung Chung Line",
  "WRL": "West Rail Line",
  "TKL": "Tseung Kwan O Line"
}

export const lineColors: {[index:string] : string} = {
  "AEL": "#138889",
  "TCL": "#F59448",
  "WRL": "#B3158C",
  "TKL": "#7D4C9B"    
}

export const stationNames: {[index: string]: string} = {
  "HOK": "Hong Kong",
  "KOW": "Kowloon",
  "TSY": "Tsing Yi",
  "AIR": "Airport",
  "AWE": "AsiaWorld-Expo",
  "OLY": "Olympic",
  "NAC": "Nam Cheong",
  "LAK": "Lai King",
  "SUN": "Sunny Bay",
  "TUC": "Tung Chung",
  "HUH": "Hung Hom",
  "ETS": "East Tsim Sha Tsui",
  "AUS": "Austin",
  "MEF": "Mei Foo",
  "TWW": "Tseung Wan West",
  "KSR": "Kam Sheung Road",
  "YUL": "Yuen Long",
  "LOP": "Long Ping",
  "TIS": "Tin Shui Wai",
  "SIH": "Siu Hong",
  "TUM": "Tuen Mun",
  "NOP": "North Point",
  "QUB": "Quarry Bay",
  "YAT": "Yau Tong",
  "TIK": "Tiu Keng Leng",
  "TKO": "Tseung Kwan O",
  "LHP": "Lohas Park",
  "HAH": "Hang Hau",
  "POA": "Po Lam"
}

export const stationSymbols: {[index: string]: string} = {
  "HONG_KONG": "HOK",
  "KOWLOON": "KOW",
  "TSING_YI": "TSY",
  "AIRPORT": "AIR",
  "ASIAWORLD-EXPO": "AWE",
  "OLYMPIC": "OLY",
  "NAM_CHEONG": "NAC",
  "LAI_KING": "LAK",
  "SUNNY_BAY": "SUN",
  "TUNG_CHUNG": "TUC",
  "HUNG_HOM": "HUH",
  "EAST_TSIM_SHA_TSUI": "ETS",
  "AUSTIN": "AUS",
  "MEI_FOO": "MEF",
  "TSUEN_WAN_WEST": "TWW",
  "KAM_SHEUNG_ROAD": "KSR",
  "YUEN_LONG": "YUL",
  "LONG_PING": "LOP",
  "TIN_SHUI_WAI": "TIS",
  "SIU_HONG": "SIH",
  "TUEN_MUN": "TUM",
  "NORTH_POINT": "NOP",
  "QUARRY_BAY": "QUB",
  "YAU_TONG": "YAT",
  "TIU_KENG_LENG": "TIK",
  "TSEUNG_KWAN_O": "TKO",
  "LOHAS_PARK": "LHP",
  "HANG_HAU": "HAH",
  "PO_LAM": "POA"
}

export const stationsList: {[index: string]: Array<string>} = {
  "AEL" : ["Hong Kong", "Kowloon", "Tsing Yi", "Airport", "AsiaWorld-Expo"],
  "TCL" : ["Hong Kong", "Kowloon", "Olympic", "Nam Cheong", "Lai King", "Tsing Yi", "Sunny Bay", "Tung Chung"],
  "WRL" : ["Hung Hom", "East Tsim Sha Tsui", "Austin", "Nam Cheong", "Mei Foo", "Tsuen Wan West", "Kam Sheung Road", "Yuen Long", "Long Ping", "Tin Shui Wai", "Siu Hong", "Tuen Mun"],
  "TKL" : ["North Point", "Quarry Bay", "Yau Tong", "Tiu Keng Leng", "Tseung Kwan O", "Lohas Park", "Hang Hau", "Po Lam"],
}

export const destionationsList: {[index: string]: {[index: string]: string}} = {
  "AEL": {"UP": "AsiaWorld-Expo", "DOWN": "Hong Kong"},
  "TCL": {"UP": "Tung Chung", "DOWN": "Hong Kong"},
  "WRL": {"UP": "Tuen Mun", "DOWN": "Hung Hom"},
  "TKL": {"UP": "Po Lam/Lohas Park", "DOWN": "North Point/Tiu Keng Leng"}   
};