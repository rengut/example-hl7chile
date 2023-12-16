export function getCodeCountry() {
  const data = [
    {Code: '004', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Afghanistan'},
    {Code: '008', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Albania'},
    {Code: '010', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Antarctica'},
    {Code: '012', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Algeria'},
    {Code: '016', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'American Samoa'},
    {Code: '020', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Andorra'},
    {Code: '024', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Angola'},
    {Code: '028', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Antigua and Barbuda'},
    {Code: '031', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Azerbaijan'},
    {Code: '032', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Argentina'},
    {Code: '036', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Australia'},
    {Code: '040', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Austria'},
    {Code: '044', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bahamas'},
    {Code: '048', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bahrain'},
    {Code: '050', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bangladesh'},
    {Code: '051', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Armenia'},
    {Code: '052', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Barbados'},
    {Code: '056', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Belgium'},
    {Code: '060', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bermuda'},
    {Code: '064', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bhutan'},
    {
      Code: '068',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Bolivia, Plurinational State of'
    },
    {Code: '070', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bosnia and Herzegovina'},
    {Code: '072', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Botswana'},
    {Code: '074', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bouvet Island'},
    {Code: '076', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Brazil'},
    {Code: '084', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Belize'},
    {
      Code: '086',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'British Indian Ocean Territory'
    },
    {Code: '090', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Solomon Islands'},
    {
      Code: '092',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Virgin Islands, British'
    },
    {Code: '096', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Brunei Darussalam'},
    {Code: '100', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Bulgaria'},
    {Code: '104', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Myanmar'},
    {Code: '108', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Burundi'},
    {Code: '112', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Belarus'},
    {Code: '116', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cambodia'},
    {Code: '120', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cameroon'},
    {Code: '124', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Canada'},
    {Code: '132', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cabo Verde'},
    {Code: '136', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cayman Islands'},
    {
      Code: '140',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Central African Republic'
    },
    {Code: '144', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Sri Lanka'},
    {Code: '148', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Chad'},
    {Code: '152', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Chile'},
    {Code: '156', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'China'},
    {
      Code: '158',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Taiwan, Province of China'
    },
    {Code: '162', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Christmas Island'},
    {
      Code: '166',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Cocos (Keeling) Islands'
    },
    {Code: '170', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Colombia'},
    {Code: '174', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Comoros'},
    {Code: '175', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mayotte'},
    {Code: '178', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Congo'},
    {
      Code: '180',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Congo, the Democratic Republic of the'
    },
    {Code: '184', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cook Islands'},
    {Code: '188', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Costa Rica'},
    {Code: '191', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Croatia'},
    {Code: '192', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cuba'},
    {Code: '196', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Cyprus'},
    {Code: '203', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Czechia'},
    {Code: '204', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Benin'},
    {Code: '208', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Denmark'},
    {Code: '212', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Dominica'},
    {Code: '214', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Dominican Republic'},
    {Code: '218', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Ecuador'},
    {Code: '222', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'El Salvador'},
    {Code: '226', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Equatorial Guinea'},
    {Code: '231', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Ethiopia'},
    {Code: '232', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Eritrea'},
    {Code: '233', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Estonia'},
    {Code: '234', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Faroe Islands'},
    {
      Code: '238',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Falkland Islands (Malvinas)'
    },
    {
      Code: '239',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'South Georgia and the South Sandwich Islands'
    },
    {Code: '242', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Fiji'},
    {Code: '246', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Finland'},
    {Code: '248', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Eland Islands'},
    {Code: '250', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'France'},
    {Code: '254', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'French Guiana'},
    {Code: '258', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'French Polynesia'},
    {
      Code: '260',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'French Southern Territories'
    },
    {Code: '262', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Djibouti'},
    {Code: '266', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Gabon'},
    {Code: '268', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Georgia'},
    {Code: '270', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Gambia'},
    {Code: '275', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Palestine, State of'},
    {Code: '276', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Germany'},
    {Code: '288', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Ghana'},
    {Code: '292', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Gibraltar'},
    {Code: '296', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Kiribati'},
    {Code: '300', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Greece'},
    {Code: '304', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Greenland'},
    {Code: '308', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Grenada'},
    {Code: '312', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guadeloupe'},
    {Code: '316', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guam'},
    {Code: '320', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guatemala'},
    {Code: '324', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guinea'},
    {Code: '328', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guyana'},
    {Code: '332', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Haiti'},
    {
      Code: '334',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Heard Island and McDonald Islands'
    },
    {Code: '336', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Holy See'},
    {Code: '340', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Honduras'},
    {Code: '344', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Hong Kong'},
    {Code: '348', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Hungary'},
    {Code: '352', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Iceland'},
    {Code: '356', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'India'},
    {Code: '360', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Indonesia'},
    {
      Code: '364',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Iran, Islamic Republic of'
    },
    {Code: '368', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Iraq'},
    {Code: '372', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Ireland'},
    {Code: '376', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Israel'},
    {Code: '380', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Italy'},
    {
      Code: '384',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Ctte d\'Ivoire'
    },
    {Code: '388', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Jamaica'},
    {Code: '392', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Japan'},
    {Code: '398', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Kazakhstan'},
    {Code: '400', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Jordan'},
    {Code: '404', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Kenya'},
    {
      Code: '408',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Korea, Democratic People\'s Republic of'
    },
    {Code: '410', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Korea, Republic of'},
    {Code: '414', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Kuwait'},
    {Code: '417', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Kyrgyzstan'},
    {
      Code: '418',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Lao People\'s Democratic Republic'
    },
    {Code: '422', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Lebanon'},
    {Code: '426', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Lesotho'},
    {Code: '428', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Latvia'},
    {Code: '430', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Liberia'},
    {Code: '434', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Libya'},
    {Code: '438', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Liechtenstein'},
    {Code: '440', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Lithuania'},
    {Code: '442', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Luxembourg'},
    {Code: '446', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Macao'},
    {Code: '450', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Madagascar'},
    {Code: '454', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Malawi'},
    {Code: '458', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Malaysia'},
    {Code: '462', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Maldives'},
    {Code: '466', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mali'},
    {Code: '470', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Malta'},
    {Code: '474', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Martinique'},
    {Code: '478', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mauritania'},
    {Code: '480', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mauritius'},
    {Code: '484', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mexico'},
    {Code: '492', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Monaco'},
    {Code: '496', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mongolia'},
    {Code: '498', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Moldova, Republic of'},
    {Code: '499', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Montenegro'},
    {Code: '500', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Montserrat'},
    {Code: '504', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Morocco'},
    {Code: '508', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Mozambique'},
    {Code: '512', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Oman'},
    {Code: '516', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Namibia'},
    {Code: '520', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Nauru'},
    {Code: '524', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Nepal'},
    {Code: '528', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Netherlands'},
    {Code: '531', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Curagao'},
    {Code: '533', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Aruba'},
    {
      Code: '534',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Sint Maarten (Dutch part)'
    },
    {
      Code: '535',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Bonaire, Sint Eustatius and Saba'
    },
    {Code: '540', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'New Caledonia'},
    {Code: '548', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Vanuatu'},
    {Code: '554', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'New Zealand'},
    {Code: '558', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Nicaragua'},
    {Code: '562', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Niger'},
    {Code: '566', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Nigeria'},
    {Code: '570', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Niue'},
    {Code: '574', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Norfolk Island'},
    {Code: '578', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Norway'},
    {
      Code: '580',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Northern Mariana Islands'
    },
    {
      Code: '581',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'United States Minor Outlying Islands'
    },
    {
      Code: '583',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Micronesia, Federated States of'
    },
    {Code: '584', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Marshall Islands'},
    {Code: '585', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Palau'},
    {Code: '586', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Pakistan'},
    {Code: '591', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Panama'},
    {Code: '598', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Papua New Guinea'},
    {Code: '600', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Paraguay'},
    {Code: '604', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Peru'},
    {Code: '608', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Philippines'},
    {Code: '612', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Pitcairn'},
    {Code: '616', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Poland'},
    {Code: '620', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Portugal'},
    {Code: '624', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guinea-Bissau'},
    {Code: '626', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Timor-Leste'},
    {Code: '630', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Puerto Rico'},
    {Code: '634', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Qatar'},
    {Code: '638', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Riunion'},
    {Code: '642', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Romania'},
    {Code: '643', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Russian Federation'},
    {Code: '646', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Rwanda'},
    {Code: '652', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Saint Barthilemy'},
    {
      Code: '654',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Saint Helena, Ascension and Tristan da Cunha'
    },
    {Code: '659', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Saint Kitts and Nevis'},
    {Code: '660', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Anguilla'},
    {Code: '662', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Saint Lucia'},
    {
      Code: '663',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Saint Martin (French part)'
    },
    {
      Code: '666',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Saint Pierre and Miquelon'
    },
    {
      Code: '670',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Saint Vincent and the Grenadines'
    },
    {Code: '674', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'San Marino'},
    {Code: '678', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Sao Tome and Principe'},
    {Code: '682', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Saudi Arabia'},
    {Code: '686', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Senegal'},
    {Code: '688', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Serbia'},
    {Code: '690', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Seychelles'},
    {Code: '694', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Sierra Leone'},
    {Code: '702', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Singapore'},
    {Code: '703', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Slovakia'},
    {Code: '704', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Viet Nam'},
    {Code: '705', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Slovenia'},
    {Code: '706', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Somalia'},
    {Code: '710', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'South Africa'},
    {Code: '716', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Zimbabwe'},
    {Code: '724', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Spain'},
    {Code: '728', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'South Sudan'},
    {Code: '729', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Sudan'},
    {Code: '732', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Western Sahara'},
    {Code: '740', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Suriname'},
    {Code: '744', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Svalbard and Jan Mayen'},
    {Code: '748', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Swaziland'},
    {Code: '752', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Sweden'},
    {Code: '756', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Switzerland'},
    {Code: '760', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Syrian Arab Republic'},
    {Code: '762', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Tajikistan'},
    {Code: '764', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Thailand'},
    {Code: '768', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Togo'},
    {Code: '772', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Tokelau'},
    {Code: '776', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Tonga'},
    {Code: '780', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Trinidad and Tobago'},
    {Code: '784', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'United Arab Emirates'},
    {Code: '788', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Tunisia'},
    {Code: '792', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Turkey'},
    {Code: '795', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Turkmenistan'},
    {
      Code: '796',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Turks and Caicos Islands'
    },
    {Code: '798', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Tuvalu'},
    {Code: '800', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Uganda'},
    {Code: '804', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Ukraine'},
    {
      Code: '807',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Macedonia, the former Yugoslav Republic of'
    },
    {Code: '818', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Egypt'},
    {Code: '826', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'United Kingdom'},
    {Code: '831', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Guernsey'},
    {Code: '832', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Jersey'},
    {Code: '833', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Isle of Man'},
    {
      Code: '834',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Tanzania, United Republic of'
    },
    {
      Code: '840',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'United States of America'
    },
    {Code: '850', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Virgin Islands, U.S.'},
    {Code: '854', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Burkina Faso'},
    {Code: '858', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Uruguay'},
    {Code: '860', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Uzbekistan'},
    {
      Code: '862',
      System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais',
      Display: 'Venezuela, Bolivarian Republic of'
    },
    {Code: '876', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Wallis and Futuna'},
    {Code: '882', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Samoa'},
    {Code: '887', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Yemen'},
    {Code: '894', System: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais', Display: 'Zambia'},
  ];
  return data;
}

export function getIdentityGender() {
  const data = [
    {
      Code: '01',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'Masculino'
    },
    {
      Code: '02',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'Femenino'
    },
    {
      Code: '03',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'Transgénero masculino'
    },
    {
      Code: '04',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'Transgénero femenino'
    },
    {
      Code: '05',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'No binarie'
    },
    {
      Code: '06',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'otra'
    },
    {
      Code: '07',
      System: 'https://interoperabilidad.minsal.cl/fhir/ig/mpi/CodeSystem/CSIdentidadDeGenero',
      Display: 'No revelado'
    }
  ];

  return data;
}