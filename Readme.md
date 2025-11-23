# TTD Web Scraper API

API for scraping latest updates from TTD website.

## Description

This API serves as a gateway to retrieve real-time updates from the Tirumala Tirupati Devasthanams (TTD) website. It provides endpoints that scrape data directly from the official website, transforming it into structured JSON format for consumption by applications.

### Key Features

- **Real-time Updates:** Fetch the latest information as soon as it is published on the TTD website.
- **Structured JSON:** Data is delivered in a structured format, ready for integration with various applications and systems.
- **Automated Readme Updates:** Whenever new data is fetched, the API automatically updates the "Latest Updates" section in the Readme.md file of your repository. This ensures that users are always informed about the most recent changes.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dprakash2101/ttd-web-scraper.git
```

2. Install Depedencies

```bash
cd ttd-web-scraper
npm install
```

3. Start The server:

```bash
npm start
```



## Usage

You can access the latest updates from the TTD website through the following endpoints:

- **Get Latest Updates:**  
  Endpoint: `https://ttd-latest-updates-latest.onrender.com/latest-updates`  
  Method: `GET`  
  Description: Fetches the latest updates from the TTD website.

### Example
Postman:
```bash
curl https://ttd-latest-updates-latest.onrender.com/latest-updates
```
#### For Browser:
 [Clickhere](https://ttd-latest-updates-latest.onrender.com/latest-updates)

 #### For Swagger File
 [Clickhere](https://ttd-latest-updates-latest.onrender.com/api-docs/)


To access the latest updates data in your local host, make a GET request to the following endpoint:

```bash
http://localhost:3000/latest-updates
```
This endpoint will return a JSON array containing the latest updates from the TTD website.

To explore the API further and view the available endpoints, you can access the Swagger documentation at:

```bash
http://localhost:3000/api-docs/
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[Devi Prakash Kandikonda](https://github.com/dprakash2101)

## Latest Updates
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>124</td><td>Tirumala Angapradakshinam tokens for February-2026 will be available for booking w.e.f. 24.11.2025, 10:00 AM. Please [Click Here](/apd/slot-booking?flow=apd&flowIdentifier=apd)</td><td>Angapradakshinam</td><td>true</td><td>N/A</td></tr><tr><td>95</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for February-2026 will be available for booking w.e.f. 21.11.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>112</td><td>Total number of Seva E - Dip Registrations received for February-2026 and click below for selected list: 

**Thomalaseva**: 564137 

**Archana**: 555243 

**Astadala Pada Padmaradhana**: 530739 

**Suprabhatham**: 626991 

Please [Click Here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/PROD_DIP_SELECTION_2025_11_20_2025_11_20_EDIP_SELECTIONS.pdf?updated_at=2025-11-20T06:35:26.568Z)</td><td>Seva E-Dip</td><td>false</td><td>N/A</td></tr><tr><td>104</td><td>Senior Citizens / Physically challenged quota for February-2026 will be available for booking w.e.f. 24.11.2025, 3:00 PM. Please [Click Here](/pld/slot-booking?flow=pld&flowIdentifier=pld)</td><td>PLD</td><td>true</td><td>N/A</td></tr><tr><td>127</td><td>Darshan & Accommodation Quota to the Trusts / Schemes donors for the month of February – 2026 will be available for booking w.e.f 26.11.2025 from 11:30 AM onwards</td><td> Trusts / Schemes</td><td>null</td><td>N/A</td></tr><tr><td>128</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of February – 2026 will be available for booking w.e.f 24.11.2025 from 11:00 AM onwards</td><td>SRIVANI Trust</td><td>null</td><td>N/A</td></tr><tr><td>129</td><td>Om Namo Venkatesaya
 
The Online Quota of General Srivari Seva for Tirumala and Tirupati, Navaneeta Seva, Parakamani Seva for the month of January - 2026 will be released at 3 PM on 26.11.2025.
 
The age Limit of General Sevaks (Tirumala) for 22-01-2026 slot is 18years to 50years only as Radhasapthami is on 25-01-2026.
 
Reporting Days:
 
General Sevaks have to report on the same day of their Seva booking date for both Tirupati and Tirumala.
 
Parakamani Sevaks have to report one day before their seva booking date in Tirumala between 2 pm and 4 pm.</td><td>Srivari Seva</td><td>null</td><td>N/A</td></tr><tr><td>102</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for February-2026 has been completed.</td><td>Arjitha Seva</td><td>true</td><td>N/A</td></tr><tr><td>125</td><td>The periodical seva FLOAT FESTIVAL in Srivari Temple, Tirumala will be conducted from 26.02.2026, seva tickets have been completed.</td><td>Float festival</td><td>true</td><td>N/A</td></tr><tr><td>126</td><td>For selected list of Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban & Rural), Tirumala, Chandragiri Mandal and Renigunta Mandal locals , Please [Click here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/Angapradakshinam_DIP_Results_20-11-2025.pdf?updated_at=2025-11-20T10:43:32.937Z)
 
The selected pilgrims shall pay a deposit amount of Rs. 500/- before 12:00 PM on 21.11.2025, to confirm their Angapradakshinam Seva.</td><td>Angapradakshinam Seva tickets eDip registrations</td><td>false</td><td>N/A</td></tr><tr><td>105</td><td>Special Entry Darshan (Rs.300) tickets for February-2026 will be available for booking w.e.f. 25.11.2025, 10:00 AM. Please [Click Here](/slot-booking?flow=sed&flowIdentifier=sed)</td><td>SED (SRI TT)</td><td>true</td><td>N/A</td></tr><tr><td>106</td><td>Tirumala and Tirupati Accommodation Quota for February-2026 will be available for booking w.e.f. 25.11.2025, 03:00 PM. Please [Click here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>ACC</td><td>true</td><td>N/A</td></tr><tr><td>76</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for December-2025 will be available for booking w.e.f, 25.11.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>Special Entry Darshan (Sri PAT)</td><td>true</td><td>N/A</td></tr><tr><td>77</td><td>TTD - Local Temples Seva Quota for December-2025 will be available for booking w.e.f 26.11.2025 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>TTD - Local Temples Seva</td><td>true</td><td>N/A</td></tr><tr><td>107</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of December-2025 will be available for booking w.e.f. 26.11.2025, 10.00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sapthagiri%20Gau%20Pradakshina%20Shala&sevaName=Sri%20Srinivasa%20Divyaanugraha%20Homam)</td><td>Homam</td><td>true</td><td>N/A</td></tr><tr><td>114</td><td>In view of TTD administrative reasons, the Vaikunta Dwara Darshanam – Special Entry Darshan and SRIVANI Break Darshan tickets will not be released with the December 25 quota release. A separate notification regarding the revised quota release schedule will be issued in due course.</td><td>Vaikunta Dwara Darshan</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
