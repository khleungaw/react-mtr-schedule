export const lineNames: {[index: string]: string} = {
  "AEL": "Airport Express",
  "TCL": "Tung Chung Line",
  "TML": "Tuen Ma Line",
  "TKL": "Tseung Kwan O Line",
  "EAL": "East Rail Line"
}

export const lineColors: {[index:string] : string} = {
  "AEL": "#138889",
  "TCL": "#F59448",
  "TML": "#8b310e",
  "TKL": "#7D4C9B",
  "EAL": "#63b8e7"
}

export const stationNames: {[index: string]: string} = {
  "HOK": "Hong Kong",
  "KOW": "Kowloon",
  "TSY": "Tsing Yi",
  "AIR": "Airport",
  "AWE": "AsiaWorld Expo",
  "TCL": "Tung Chung Line",
  "OLY": "Olympic",
  "NAC": "Nam Cheong",
  "LAK": "Lai King",
  "SUN": "Sunny Bay",
  "TUC": "Tung Chung",
  "TML": "Tuen Ma Line",
  "WKS": "Wu Kai Sha",
  "MOS": "Ma On Shan",
  "HEO": "Heng On",
  "TSH": "Tai Shui Hang",
  "SHM": "Shek Mun",
  "CIO": "City One",
  "STW": "Sha Tin Wai",
  "CKT": "Che Kung Temple",
  "TAW": "Tai Wai",
  "HIK": "Hin Keng",
  "DIH": "Diamond Hill",
  "KAT": "Kai Tak",
  "SUW": "Sung Wong Toi",
  "TKW": "To Kwa Wan",
  "HOM": "Ho Man Tin",
  "HUH": "Hung Hom",
  "ETS": "East Tsim Sha Tsui",
  "AUS": "Austin",
  "MEF": "Mei Foo",
  "TWW": "Tsuen Wan West",
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
  "LHP": "LOHAS Park",
  "HAH": "Hang Hau",
  "POA": "Po Lam",
  "EAL": "East Rail Line",
  "ADM": "Admiralty",
  "EXC": "Exhibition Centre",
  "MKK": "Mong Kok East",
  "KOT": "Kowloon Tong",
  "SHT": "Sha Tin",
  "FOT": "Fo Tan",
  "RAC": "Racecourse",
  "UNI": "University",
  "TAP": "Tai Po Market",
  "TWO": "Tai Wo",
  "FAN": "Fanling",
  "SHS": "Sheung Shui",
  "LOW": "Lo Wu",
  "LMC": "Lok Ma Chau"
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
  "AEL": ["HOK","KOW","TSY","AIR","AWE"],
  "TCL": ["HOK","KOW","OLY","NAC","LAK","TSY","SUN","TUC"],
  "TML": ["WKS","MOS","HEO","TSH","SHM","CIO","STW","CKT","TAW","HIK","DIH","KAT","SUW","TKW","HOM","HUH","ETS","AUS","NAC","MEF","TWW","KSR","YUL","LOP","TIS","SIH","TUM"],
  "TKL": ["NOP","QUB","YAT","TIK","TKO","LHP","HAH","POA"],
  "EAL": ["ADM","EXC","HUH","MKK","KOT","TAW","SHT","FOT","RAC","UNI","TAP","TWO","FAN","SHS","LOW","LMC"]
}

export const destionationsList: {[index: string]: {[index: string]: string}} = {
  "AEL": {"UP": "AsiaWorld-Expo", "DOWN": "Hong Kong"},
  "TCL": {"UP": "Tung Chung", "DOWN": "Hong Kong"},
  "TML": {"UP": "Tuen Mun", "DOWN": "Wu Kai Sha"},
  "TKL": {"UP": "Po Lam/Lohas Park", "DOWN": "North Point/Tiu Keng Leng"},
  "EAL": {"UP": "Lok Ma Chau", "DOWN": "Admiralty"}
};