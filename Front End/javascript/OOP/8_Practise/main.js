
class Company{
    constructor(name,sector,symbol){
        this.name=name;
        this.sector=sector;
        this.symbol=symbol;
    }
    getSummary(){
        return `${this.name} (${this.symbol}) operates in the ${this.sector} sector`;
    }
}

// Data in JSON Format
let companyData=[
        ["Amer Sports Oyj","AMEAS","Consumer Goods"  ],
        ["Cargotec Oyj","CGCBV","Industrials"  ],
        ["Citycon Oyj","CTY1S","Financials"  ],
        ["DNA Oyj","DNA","Telecommunications"  ],
        ["Elisa Oyj","ELISA","Telecommunications"  ],
        ["Finnair Oyj","FIA1S","Consumer Services"  ],
        ["Fortum Oyj","FORTUM","Utilities"  ],
        ["Fiskars Oyj Abp","FSKRS","Consumer Goods"  ],
        ["Huhtam�ki Oyj","HUH1V","Industrials"  ],
        ["Konecranes Oyj","KCR","Industrials"  ],
        ["Kemira Oyj","KEMIRA","Basic Materials"  ],
        ["Kesko Oyj A","KESKOA","Consumer Services"  ],
        ["Kesko Oyj B","KESKOB","Consumer Services"  ],
        ["KONE Oyj","KNEBV","Industrials"  ],
        ["Kojamo Oyj","KOJAMO","Financials"  ],
        ["Mets� Board Oyj A","METSA","Basic Materials"  ],
        ["Mets� Board Oyj B","METSB","Basic Materials"  ],
        ["Metso Oyj","METSO","Industrials"  ],
        ["Nordea Bank AB FDR","NDA1V","Financials"  ],
        ["Neste Oyj","NESTE","Oil & Gas"  ],
        ["Nokia Oyj","NOKIA","Technology"  ],
        ["Nokian Renkaat Oyj","NRE1V","Consumer Goods"  ],
        ["Orion Oyj A","ORNAV","Health Care"  ],
        ["Orion Oyj B","ORNBV","Health Care"  ],
        ["Outokumpu Oyj","OUT1V","Basic Materials"  ],
        ["Sanoma Oyj","SAA1V","Consumer Services"  ],
        ["Sampo Oyj A","SAMPO","Financials"  ],
        ["SSAB A","SSABAH","Basic Materials"  ],
        ["SSAB B","SSABBH","Basic Materials"  ],
        ["Stora Enso Oyj A","STEAV","Basic Materials"  ],
        ["Stora Enso Oyj R","STERV","Basic Materials"  ],
        ["Telia Company","TELIA1","Telecommunications"  ],
        ["Tieto Oyj","TIETO","Technology"  ],
        ["Terveystalo Oyj","TTALO","Health Care"  ],
        ["UPM-Kymmene Oyj","UPM","Basic Materials"  ],
        ["Uponor Oyj","UPONOR","Industrials"  ],
        ["Valmet Oyj","VALMT","Industrials"  ],
        ["W�rtsil� Oyj Abp","WRT1V","Industrials"  ],
        ["YIT Oyj","YIT","Industrials"  ],
        ["Aktia Bank Abp","AKTIA","Financials"  ],
        ["�landsbanken Abp A","ALBAV","Financials"  ],
        ["�landsbanken Abp B","ALBBV","Financials"  ],
        ["Alma Media Oyj","ALMA","Consumer Services"  ],
        ["Altia Oyj","ALTIA","Consumer Goods"  ],
        ["Aspo Oyj","ASPO","Industrials"  ],
        ["Asiakastieto Group Oyj","ATG1V","Financials"  ],
        ["Atria Oyj A","ATRAV","Consumer Goods"  ],
        ["Basware Oyj","BAS1V","Technology"  ],
        ["Bittium Oyj","BITTI","Technology"  ],
        ["CapMan Oyj","CAPMAN","Financials"  ],
        ["Caverion Oyj","CAV1V","Industrials"  ],
        ["Cramo Oyj","CRA1V","Industrials"  ],
        ["eQ Oyj","EQV1V","Financials"  ],
        ["Evli Pankki Oyj","EVLI","Financials"  ],
        ["F-Secure Oyj","FSC1V","Technology"  ],
        ["HKScan Oyj A","HKSAV","Consumer Goods"  ],
        ["Suomen Hoivatilat Oyj","HOIVA","Financials"  ],
        ["Kamux Oyj","KAMUX","Consumer Services"  ],
        ["Lassila & Tikanoja Oyj","LAT1V","Industrials"  ],
        ["Lehto Group Oyj","LEHTO","Industrials"  ],
        ["Oriola Oyj A","OKDAV","Health Care"  ],
        ["Oriola Oyj B","OKDBV","Health Care"  ],
        ["Olvi Oyj A","OLVAS","Consumer Goods"  ],
        ["Outotec Oyj","OTE1V","Industrials"  ],
        ["Pihlajalinna Oyj","PIHLIS","Health Care"  ],
        ["Ponsse Oyj 1","PON1V","Industrials"  ],
        ["P�yry Oyj","POY1V","Industrials"  ],
        ["Raisio Oyj Vaihto-osake","RAIVV","Consumer Goods"  ],
        ["Rapala VMC Oyj","RAP1V","Consumer Goods"  ],
        ["Revenio Group Oyj","REG1V","Health Care"  ],
        ["Ramirent Oyj","RMR1V","Industrials"  ],
        ["Robit Oyj","ROBIT","Industrials"  ],
        ["Rovio Entertainment Oyj","ROVIO","Consumer Goods"  ],
        ["Scanfil Oyj","SCANFL","Industrials"  ],
        ["SRV Yhti�t Oyj","SRV1V","Industrials"  ],
        ["Stockmann Oyj Abp A","STCAS","Consumer Services"  ],
        ["Stockmann Oyj Abp B","STCBV","Consumer Services"  ],
        ["Suominen Oyj","SUY1V","Consumer Goods"  ],
        ["Taaleri Oyj","TAALA","Financials"  ],
        ["Tikkurila Oyj","TIK1V","Industrials"  ],
        ["Teleste Oyj","TLT1V","Technology"  ],
        ["Tokmanni Group Oyj","TOKMAN","Consumer Services"  ],
        ["Technopolis Oyj","TPS1V","Financials"  ],
        ["Vaisala Oyj A","VAIAS","Industrials"  ],
        ["Viking Line Abp","VIK1V","Consumer Services"  ],
        ["Aspocomp Group Oyj","ACG1V","Industrials"  ],
        ["Afarak Group Oyj","AFAGR","Basic Materials"  ],
        ["Apetit Oyj","APETIT","Consumer Goods"  ],
        ["Biohit Oyj B","BIOBV","Health Care"  ],
        ["Consti Yhti�t Oyj","CONSTI","Industrials"  ],
        ["Componenta Oyj","CTH1V","Industrials"  ],
        ["Digia Oyj","DIGIA","Technology"  ],
        ["Digitalist Group Oyj","DIGIGR","Technology"  ],
        ["Dovre Group Oyj","DOV1V","Industrials"  ],
        ["Efore Oyj","EFO1V","Industrials"  ],
        ["Elecster Oyj A","ELEAV","Industrials"  ],
        ["Endomines","ENDOM","Basic Materials"  ],
        ["Etteplan Oyj","ETTE","Industrials"  ],
        ["Exel Composites Oyj","EXL1V","Industrials"  ],
        ["Glaston Oyj Abp","GLA1V","Industrials"  ],
        ["Harvia Oyj","HARVIA","Consumer Goods"  ],
        ["Honkarakenne Oyj B","HONBS","Consumer Goods"  ],
        ["Incap Oyj","ICP1V","Industrials"  ],
        ["Innofactor Plc","IFA1V","Technology"  ],
        ["Ilkka-Yhtym� Oyj 2","ILK2S","Consumer Services"  ],
        ["Investors House Oyj","INVEST","Financials"  ],
        ["Kesla Oyj A","KELAS","Industrials"  ],
        ["Keskisuomalainen Oyj A","KSLAV","Consumer Services"  ],
        ["Martela Oyj A","MARAS","Consumer Goods"  ],
        ["Marimekko Oyj","MMO1V","Consumer Goods"  ],
        ["Neo Industrial Oyj","NEO1V","Industrials"  ],
        ["Nixu Oyj","NIXU","Technology"  ],
        ["Nurminen Logistics Oyj","NLG1V","Industrials"  ],
        ["Orava Asuntorahasto Oyj","OREIT","Financials"  ],
        ["Kotipizza Group Oyj","PIZZA","Consumer Services"  ],
        ["Pohjois-Karjalan Kirjapaino","PKK1V","Consumer Services"  ],
        ["Panostaja Oyj","PNA1V","Financials"  ],
        ["QPR Software Oyj","QPR1V","Technology"  ],
        ["Qt Group Oyj","QTCOM","Technology"  ],
        ["Raute Oyj A","RAUTE","Industrials"  ],
        ["Restamax Oyj","RESTA","Consumer Services"  ],
        ["Saga Furs Oyj C","SAGCV","Consumer Goods"  ],
        ["Sievi Capital Oyj","SIEVI","Financials"  ],
        ["Siili Solutions Oyj","SIILI","Technology"  ],
        ["Silm�asema Oyj","SILMA","Health Care"  ],
        ["Solteq Oyj","SOLTEQ","Technology"  ],
        ["Soprano Oyj","SOPRA","Technology"  ],
        ["Sotkamo Silver AB","SOSI1","Basic Materials"  ],
        ["SSH Communications Security","SSH1V","Technology"  ],
        ["Tecnotree Oyj","TEM1V","Technology"  ],
        ["Talenom Oyj","TNOM","Industrials"  ],
        ["Trainers� House Oyj","TRH1V","Technology"  ],
        ["Tulikivi Oyj A","TULAV","Industrials"  ],
        ["Plc Uutechnic Group Oyj","UUTEC","Industrials"  ],
        ["Valoe Oyj","VALOE","Industrials"  ],
        ["Wulff-Yhti�t Oyj","WUF1V","Industrials"  ],
        ["Yleiselektroniikka Oyj E","YLEPS","Industrials"  ]
      ];



var company= new Array();
// Adding data to Company Class
for(var i=0;i<companyData.length;i++){
    company.push(new Company(companyData[i][0],companyData[i][2],companyData[i][1]));
}

// Sorting Function
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
// Sorting by "name","sector" or "symbol"
company.sort(dynamicSort("name"));

// console.log(company)

for(var i=0;i<company.length;i++){
    console.log(company[i].getSummary());
}

