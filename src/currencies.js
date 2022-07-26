const URL = 'https://api.exchangerate-api.com/v4/latest/USD';

function WriteToCache(url, data){ localStorage.setItem(url, JSON.stringify(data));
}

function ReadFromCache(url){console.log('coming from cache');return JSON.parse(localStorage.getItem(url)) || null; }

// let ret = ; 

let processed = [];
if(ReadFromCache(URL) == null){
   processed = fetch(URL).then(dt=>dt.json()).then(dtt => {
      WriteToCache(URL, dtt);
      console.log('coming from api')
      return dtt})
}else{
   processed = ReadFromCache(URL)
}

export let pcrr = processed.rates;

// console.log(pcrr);

export const curr = [
    {
       "code":"AED",
       "name":"Arab Emirates Dirham",
       "locale":"ar_AE",
       "display":1
    },
    {
       "code":"AFN",
       "name":"Afghanistan Afghani",
       "locale":"ps_AF",
       "display":1
    },
    {
       "code":"ALL",
       "name":"Albanian Lek",
       "locale":"sq_AL",
       "display":1
    },
    {
       "code":"AMD",
       "name":"Armenian Dram",
       "locale":"hy_AM",
       "display":1
    },
    {
       "code":"ANG",
       "name":"Netherlands Antillean Guilder",
       "locale":"nl_CW",
       "display":1
    },
    {
       "code":"AOA",
       "name":"Angolan Kwanza",
       "locale":"ln_AO",
       "display":1
    },
    {
       "code":"ARS",
       "name":"Argentine Peso",
       "locale":"es_AR",
       "display":1
    },
    {
       "code":"AUD",
       "name":"Australian Dollar",
       "locale":"en_AU",
       "display":1,
       "rate": 1.2985
    },
    {
       "code":"AWG",
       "name":"Aruban Guilder",
       "locale":"nl_AW",
       "display":1
    },
    {
       "code":"AZN",
       "name":"Azerbaijan New Manat",
       "locale":"az_Cyrl_AZ",
       "display":1
    },
    {
       "code":"BAM",
       "name":"Marka",
       "locale":"bs_Cyrl_BA",
       "display":1
    },
    {
       "code":"BBD",
       "name":"Barbados Dollar",
       "locale":"en_BB",
       "display":1
    },
    {
       "code":"BDT",
       "name":"Bangladeshi Taka",
       "locale":"bn_BD",
       "display":1
    },
    {
       "code":"BGN",
       "name":"Bulgarian Lev",
       "locale":"bg_BG",
       "display":1,
       "rates":1.5
    },
    {
       "code":"BHD",
       "name":"Bahraini Dinar",
       "locale":"ar_BH",
       "display":1
    },
    {
       "code":"BIF",
       "name":"Burundi Franc",
       "locale":"rn_BI",
       "display":1
    },
    {
       "code":"BMD",
       "name":"Bermudian Dollar",
       "locale":"en_BM",
       "display":1
    },
    {
       "code":"BND",
       "name":"Brunei Dollar",
       "locale":"ms_Latn_BN",
       "display":1
    },
    {
       "code":"BOB",
       "name":"Boliviano",
       "locale":"es_BO",
       "display":1
    },
    {
       "code":"BRL",
       "name":"Brazilian Real",
       "locale":"pt_BR",
       "display":1,
       "rates": 3.4034
    },
    {
       "code":"BSD",
       "name":"Bahamian Dollar",
       "locale":"en_BS",
       "display":1
    },
    {
       "code":"BTN",
       "name":"Bhutan Ngultrum",
       "locale":"dz_BT",
       "display":1
    },
    {
       "code":"BWP",
       "name":"Botswana Pula",
       "locale":"en_BW",
       "display":1
    },
    {
       "code":"BYR",
       "name":"Belarussian Ruble",
       "locale":"ru_BY",
       "display":1
    },
    {
       "code":"BZD",
       "name":"Belize Dollar",
       "locale":"en_BZ",
       "display":1
    },
    {
       "code":"CAD",
       "name":"Canadian Dollar",
       "locale":"fr_CA",
       "display":1,
       "rates": 1.2639
    },
    {
       "code":"CDF",
       "name":"Congo\/Kinshasa Franc",
       "locale":"lu_CD",
       "display":1
    },
    {
       "code":"CHF",
       "name":"Swiss Franc",
       "locale":"rm_CH",
       "display":1,
       "rates": 0.9725
    },
    {
       "code":"CLP",
       "name":"Chilean Peso",
       "locale":"es_CL",
       "display":1
    },
    {
       "code":"CNY",
       "name":"Yuan Renminbi",
       "locale":"ii_CN",
       "display":1,
       "rates": 6.2921
    },
    {
       "code":"COP",
       "name":"Colombian Peso",
       "locale":"es_CO",
       "display":1
    },
    {
       "code":"CRC",
       "name":"Costa Rican Colon",
       "locale":"es_CR",
       "display":1
    },
    {
       "code":"CUP",
       "name":"Cuban Peso",
       "locale":"es_CU",
       "display":1
    },
    {
       "code":"CVE",
       "name":"Cape Verde Escudo",
       "locale":"pt_CV",
       "display":1
    },
    {
       "code":"CZK",
       "name":"Czech Koruna",
       "locale":"en_CZ",
       "display":1,
       "rates": 20.586
    },
    {
       "code":"DJF",
       "name":"Djibouti Franc",
       "locale":"ar_DJ",
       "display":1
    },
    {
       "code":"DKK",
       "name":"Danish Krone",
       "locale":"da_DK",
       "display":1,
       "rates": 6.0506
    },
    {
       "code":"DOP",
       "name":"Dominican Peso",
       "locale":"es_DO",
       "display":1
    },
    {
       "code":"DZD",
       "name":"Algerian Dinar",
       "locale":"kab_DZ",
       "display":1
    },
    {
       "code":"EGP",
       "name":"Egyptian Pound",
       "locale":"ar_EG",
       "display":1
    },
    {
       "code":"ERN",
       "name":"Eritrean Nakfa",
       "locale":"ar_ER",
       "display":1
    },
    {
       "code":"ETB",
       "name":"Ethiopian Birr",
       "locale":"om_ET",
       "display":1
    },
    {
       "code":"EUR",
       "name":"Euro",
       "locale":"en_DE",
       "display":1,
       "rates": 0.8124
    },
    {
       "code":"FJD",
       "name":"Fiji Dollar",
       "locale":"en_FJ",
       "display":1
    },
    {
       "code":"FKP",
       "name":"Falkland Islands Pound",
       "locale":"en_FK",
       "display":1
    },
    {
       "code":"GBP",
       "name":"Pound Sterling",
       "locale":"en_GB",
       "display":1,
       "rates": 0.7117
    },
    {
       "code":"GEL",
       "name":"Georgian Lari",
       "locale":"ka_GE",
       "display":1
    },
    {
       "code":"GHS",
       "name":"Ghanaian Cedi",
       "locale":"ak_GH",
       "display":1
    },
    {
       "code":"GGP",
       "name":"Guernsey Pound",
       "locale":"en_GG",
       "display":1
    },
    {
       "code":"GIP",
       "name":"Gibraltar Pound",
       "locale":"en_GI",
       "display":1
    },
    {
       "code":"GMD",
       "name":"Gambian Dalasi",
       "locale":"en_GM",
       "display":1
    },
    {
       "code":"GNF",
       "name":"Guinea Franc",
       "locale":"fr_GN",
       "display":1
    },
    {
       "code":"GTQ",
       "name":"Guatemalan Quetzal",
       "locale":"es_GT",
       "display":1
    },
    {
       "code":"GYD",
       "name":"Guyana Dollar",
       "locale":"en_GY",
       "display":1
    },
    {
       "code":"HKD",
       "name":"Hong Kong Dollar",
       "locale":"zh_Hans_HK",
       "display":1,
       "rates": 7.8453
    },
    {
       "code":"HNL",
       "name":"Honduran Lempira",
       "locale":"es_HN",
       "display":1
    },
    {
       "code":"HRK",
       "name":"Croatian Kuna",
       "locale":"hr_HR",
       "display":1,
       "rates": 6.0208
    },
    {
       "code":"HTG",
       "name":"Haitian Gourde",
       "locale":"fr_HT",
       "display":1
    },
    {
       "code":"HUF",
       "name":"Hungarian Forint",
       "locale":"en_HU",
       "display":1,
       "rates": 252.2707

    },
    {
       "code":"IDR",
       "name":"Indonesian Rupiah",
       "locale":"id_ID",
       "display":1,
       "rates": 17142.74
    },
    {
       "code":"ILS",
       "name":"Israeli New Shekel",
       "locale":"ar_IL",
       "display":1,
       "rates": 4.3435
    },
    {
       "code":"INR",
       "name":"Indian Rupee",
       "locale":"kok_IN",
       "display":1,
       "rates": 81.39
    },
    {
       "code":"IQD",
       "name":"Iraqi Dinar",
       "locale":"ar_IQ",
       "display":1
    },
    {
       "code":"IRR",
       "name":"Iranian Rial",
       "locale":"fa_IR",
       "display":1
    },
    {
       "code":"ISK",
       "name":"Iceland Krona",
       "locale":"en_IS",
       "display":1,
       "rates": 123.3
    },
    {
       "code":"JMD",
       "name":"Jamaican Dollar",
       "locale":"en_JM",
       "display":1
    },
    {
       "code":"JOD",
       "name":"Jordanian Dinar",
       "locale":"ar_JO",
       "display":1
    },
    {
       "code":"JPY",
       "name":"Japanese Yen",
       "locale":"ja_JP",
       "display":1,
       "rates": 132.41
    },
    {
       "code":"KES",
       "name":"Kenyan Shilling",
       "locale":"saq_KE",
       "display":1
    },
    {
       "code":"KGS",
       "name":"Som",
       "locale":"ru_KG",
       "display":1
    },
    {
       "code":"KHR",
       "name":"Kampuchean Riel",
       "locale":"km_KH",
       "display":1
    },
    {
       "code":"KMF",
       "name":"Comoros Franc",
       "locale":"ar_KM",
       "display":1
    },
    {
       "code":"KPW",
       "name":"North Korean Won",
       "locale":"ko_KP",
       "display":1
    },
    {
       "code":"KRW",
       "name":"Korean Won",
       "locale":"ko_KR",
       "display":1,
       "rates": 1316.26
    },
    {
       "code":"KWD",
       "name":"Kuwaiti Dinar",
       "locale":"ar_KW",
       "display":1
    },
    {
       "code":"KYD",
       "name":"Cayman Islands Dollar",
       "locale":"en_KY",
       "display":1
    },
    {
       "code":"KZT",
       "name":"Kazakhstan Tenge",
       "locale":"kk_Cyrl_KZ",
       "display":1
    },
    {
       "code":"LAK",
       "name":"Lao Kip",
       "locale":"lo_LA",
       "display":1
    },
    {
       "code":"LBP",
       "name":"Lebanese Pound",
       "locale":"ar_LB",
       "display":1
    },
    {
       "code":"LKR",
       "name":"Sri Lanka Rupee",
       "locale":"ta_LK",
       "display":1
    },
    {
       "code":"LRD",
       "name":"Liberian Dollar",
       "locale":"vai_Latn_LR",
       "display":1
    },
    {
       "code":"LSL",
       "name":"Lesotho loti",
       "locale":"en_LS",
       "display":1
    },
    {
       "code":"LTL",
       "name":"Lithuanian Litas",
       "locale":"en_LT",
       "display":1
    },
    {
       "code":"LVL",
       "name":"Latvian Lats",
       "locale":"en_LV",
       "display":1
    },
    {
       "code":"LYD",
       "name":"Libyan Dinar",
       "locale":"ar_LY",
       "display":1
    },
    {
       "code":"MAD",
       "name":"Moroccan Dirham",
       "locale":"ar_MA",
       "display":1
    },
    {
       "code":"MDL",
       "name":"Moldovan Leu",
       "locale":"ru_MD",
       "display":1
    },
    {
       "code":"MGA",
       "name":"Malagasy Ariary",
       "locale":"mg_MG",
       "display":1
    },
    {
       "code":"MKD",
       "name":"Denar",
       "locale":"sq_MK",
       "display":1
    },
    {
       "code":"MMK",
       "name":"Myanmar Kyat",
       "locale":"my_MM",
       "display":1
    },
    {
       "code":"MNT",
       "name":"Mongolian Tugrik",
       "locale":"mn_Cyrl_MN",
       "display":1
    },
    {
       "code":"MOP",
       "name":"Macau Pataca",
       "locale":"zh_Hant_MO",
       "display":1
    },
    {
       "code":"MRO",
       "name":"Mauritanian Ouguiya",
       "locale":"ar_MR",
       "display":1
    },
    {
       "code":"MUR",
       "name":"Mauritius Rupee",
       "locale":"en_MU",
       "display":1
    },
    {
       "code":"MWK",
       "name":"Malawi Kwacha",
       "locale":"en_MW",
       "display":1
    },
    {
       "code":"MXN",
       "name":"Mexican Nuevo Peso",
       "locale":"es_MX",
       "display":1,
       "rates": 18.4762
    },
    {
       "code":"MYR",
       "name":"Malaysian Ringgit",
       "locale":"ms_Latn_MY",
       "display":1,
       "rates": 4.7924

    },
    {
       "code":"MZN",
       "name":"Mozambique Metical",
       "locale":"mgh_MZ",
       "display":1
    },
    {
       "code":"NAD",
       "name":"Namibian Dollar",
       "locale":"naq_NA",
       "display":1
    },
    {
       "code":"NGN",
       "name":"Nigerian Naira",
       "locale":"ha_Latn_NG",
       "display":1
    },
    {
       "code":"NIO",
       "name":"Nicaraguan Cordoba Oro",
       "locale":"es_NI",
       "display":1
    },
    {
       "code":"NOK",
       "name":"Norwegian Krone",
       "locale":"nn_NO",
       "display":1,
       "rates": 9.605
       
    },
    {
       "code":"NPR",
       "name":"Nepalese Rupee",
       "locale":"ne_NP",
       "display":1
    },
    {
       "code":"NZD",
       "name":"New Zealand Dollar",
       "locale":"en_NZ",
       "display":1,
       "rates": 1.3837
    },
    {
       "code":"OMR",
       "name":"Omani Rial",
       "locale":"ar_OM",
       "display":1
    },
    {
       "code":"PAB",
       "name":"Panamanian Balboa",
       "locale":"es_PA",
       "display":1
    },
    {
       "code":"PEN",
       "name":"Peruvian Nuevo Sol",
       "locale":"es_PE",
       "display":1
    },
    {
       "code":"PGK",
       "name":"Papua New Guinea Kina",
       "locale":"en_PG",
       "display":1
    },
    {
       "code":"PHP",
       "name":"Philippine Peso",
       "locale":"es_PH",
       "display":1,
       "rates": 52.1399
    },
    {
       "code":"PKR",
       "name":"Pakistan Rupee",
       "locale":"pa_Arab_PK",
       "display":1
    },
    {
       "code":"PLN",
       "name":"Polish Zloty",
       "locale":"en_PL",
       "display":1,
       "rates": 3.3859
    },
    {
       "code":"PYG",
       "name":"Paraguay Guarani",
       "locale":"es_PY",
       "display":1
    },
    {
       "code":"QAR",
       "name":"Qatari Rial",
       "locale":"ar_QA",
       "display":1
    },
    {
       "code":"RON",
       "name":"Romanian New Leu",
       "locale":"en_RO",
       "display":1,
       "rates": 3.7847
    },
    {
       "code":"RSD",
       "name":"Dinar",
       "locale":"sr_Latn_RS",
       "display":1
    },
    {
       "code":"RUB",
       "name":"Russian Ruble",
       "locale":"ru_RU",
       "display":1,
       "rates": 61.5302
    },
    {
       "code":"RWF",
       "name":"Rwanda Franc",
       "locale":"rw_RW",
       "display":1
    },
    {
       "code":"SAR",
       "name":"Saudi Riyal",
       "locale":"ar_SA",
       "display":1
    },
    {
       "code":"SBD",
       "name":"Solomon Islands Dollar",
       "locale":"en_SB",
       "display":1
    },
    {
       "code":"SCR",
       "name":"Seychelles Rupee",
       "locale":"en_SC",
       "display":1
    },
    {
       "code":"SDG",
       "name":"Sudanese Pound",
       "locale":"ar_SD",
       "display":1
    },
    {
       "code":"SEK",
       "name":"Swedish Krona",
       "locale":"sv_SE",
       "display":1,
       "rates": 8.425
    },
    {
       "code":"SGD",
       "name":"Singapore Dollar",
       "locale":"ms_Latn_SG",
       "display":1,
       "rates": 1.3138
    },
    {
       "code":"SHP",
       "name":"Saint Helena Pound",
       "locale":"en_SH",
       "display":1
    },
    {
       "code":"SLL",
       "name":"Sierra Leone Leone",
       "locale":"en_SL",
       "display":1
    },
    {
       "code":"SOS",
       "name":"Somali Shilling",
       "locale":"ar_SO",
       "display":1
    },
    {
       "code":"SRD",
       "name":"Surinam Dollar",
       "locale":"nl_SR",
       "display":1
    },
    {
       "code":"STD",
       "name":"Dobra",
       "locale":"pt_ST",
       "display":1
    },
    {
       "code":"SYP",
       "name":"Syrian Pound",
       "locale":"ar_SY",
       "display":1
    },
    {
       "code":"SZL",
       "name":"Swaziland Lilangeni",
       "locale":"en_SZ",
       "display":1
    },
    {
       "code":"THB",
       "name":"Thai Baht",
       "locale":"th_TH",
       "display":1,
       "rates": 31.3202
    },
    {
       "code":"TJS",
       "name":"Tajik Somoni",
       "locale":"tg_Cyrl_TJ",
       "display":1
    },
    {
       "code":"TMT",
       "name":"Manat",
       "locale":"tk_Latn_TM",
       "display":1
    },
    {
       "code":"TND",
       "name":"Tunisian Dollar",
       "locale":"ar_TN",
       "display":1
    },
    {
       "code":"TOP",
       "name":"Tongan Pa'anga",
       "locale":"to_TO",
       "display":1
    },
    {
       "code":"TRY",
       "name":"Turkish Lira",
       "locale":"tr_TR",
       "display":1,
       "rates": 4.0461
    },
    {
       "code":"TTD",
       "name":"Trinidad and Tobago Dollar",
       "locale":"en_TT",
       "display":1
    },
    {
       "code":"TWD",
       "name":"Taiwan Dollar",
       "locale":"zh_Hant_TW",
       "display":1
    },
    {
       "code":"TZS",
       "name":"Tanzanian Shilling",
       "locale":"sw_TZ",
       "display":1
    },
    {
       "code":"UAH",
       "name":"Ukraine Hryvnia",
       "locale":"ru_UA",
       "display":1
    },
    {
       "code":"UGX",
       "name":"Uganda Shilling",
       "locale":"teo_UG",
       "display":1
    },
    {
       "code":"USD",
       "name":"US Dollar",
       "locale":"en_US_POSIX",
       "display":1
    },
    {
       "code":"UYU",
       "name":"Uruguayan Peso",
       "locale":"es_UY",
       "display":1
    },
    {
       "code":"UZS",
       "name":"Uzbekistan Sum",
       "locale":"uz_Cyrl_UZ",
       "display":1
    },
    {
       "code":"VEF",
       "name":"Venezuelan Bolivar",
       "locale":"es_VE",
       "display":1
    },
    {
       "code":"VND",
       "name":"Vietnamese Dong",
       "locale":"vi_VN",
       "display":1
    },
    {
       "code":"VUV",
       "name":"Vanuatu Vatu",
       "locale":"en_VU",
       "display":1
    },
    {
       "code":"WST",
       "name":"Samoan Tala",
       "locale":"en_WS",
       "display":1
    },
    {
       "code":"YER",
       "name":"Yemeni Rial",
       "locale":"ar_YE",
       "display":1
    },
    {
       "code":"ZAR",
       "name":"South African Rand",
       "locale":"en_LS",
       "display":1,   
       "rates" : 12.0244
    },
    {
       "code":"ZMW",
       "name":"Zambian Kwacha",
       "locale":"af_ZA",
       "display":1
    }
 ]

// export curr;
// export await pcrr;