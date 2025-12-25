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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>132</td><td>Om Namo Venkatesaya

Srivari Devotees who could not get Vaikuntha Dwara Darshan tickets through the dip system will have the opportunity to have darshan of Sri Venkateswara Swamy through the Sarva Darshan queue on any day between January 2 and January 8. – TTD</td><td>Vaikunta Dwara Darshanam</td><td>null</td><td>N/A</td></tr><tr><td>133</td><td>Vaikunta Dwara Darshanam (for Locals) Electronic DIP registrations for 06.01.2026, 07.01.2026, and 08.01.2026 will be open from 25.12.2025 at 10:00 AM to 27.12.2025 at 05:00 PM. Please [Click Here](/seva-dip/dashboard?flow=seva-dip&flowIdentifier=seva-dip)
 
The Electronic DIP results will be published on 29.12.2025 at 02:00 PM</td><td>Vaikunta Dwara Darshanam (for Locals)</td><td>true</td><td>N/A</td></tr><tr><td>77</td><td>TTD - Local Temples Seva Quota for January-2026 will be available for booking w.e.f  25.12.2025 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>TTD - Local Temples Seva</td><td>true</td><td>N/A</td></tr><tr><td>107</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Ticket bookings for the month of January-2026 are completed</td><td>Homam</td><td>true</td><td>N/A</td></tr><tr><td>129</td><td>Om Namo Venkatesaya
 
The Online Quota of General Srivari Seva for Tirumala and Tirupati, Navaneeta Seva, Parakamani Seva for the month of February - 2026 will be released at 3 PM on 25.12.2025.
 
Reporting Days:
 
General Sevaks have to report on the same day of their Seva booking date for both Tirupati and Tirumala.
 
Parakamani Sevaks have to report one day before their seva booking date in Tirumala between 2 pm and 4 pm.</td><td>Srivari Seva</td><td>null</td><td>N/A</td></tr><tr><td>135</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of March – 2026 will be available for booking w.e.f 26. 12. 2025 from 11:30 AM onwards</td><td>Trust and Schemes</td><td>null</td><td>N/A</td></tr><tr><td>105</td><td>Special Entry Darshan (Rs.300) ticket bookings for March-2026 are completed</td><td>SED (SRI TT)</td><td>true</td><td>N/A</td></tr><tr><td>106</td><td>Tirumala and Tirupati Accommodation Quota for March-2026 will be available for booking w.e.f. 24.12.2025, 03:00 PM. Please [Click here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>ACC</td><td>true</td><td>N/A</td></tr><tr><td>76</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for January-2026 will be available for booking w.e.f, 24.12.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>Special Entry Darshan (Sri PAT)</td><td>true</td><td>N/A</td></tr><tr><td>104</td><td>Senior Citizens / Physically challenged quota bookings for March-2026 are completed</td><td>PLD</td><td>true</td><td>N/A</td></tr><tr><td>134</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of March – 2026 will be available for booking w.e.f 23.12.2025 from 11:00 AM onwards</td><td>SRIVANI Trust</td><td>null</td><td>N/A</td></tr><tr><td>124</td><td>Tirumala Angapradakshinam bookings for March-2026 are completed</td><td>Angapradakshinam</td><td>true</td><td>N/A</td></tr><tr><td>95</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for March-2026 will be available for booking w.e.f. 22.12.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>102</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for March-2026 are completed</td><td>Arjitha Seva</td><td>true</td><td>N/A</td></tr><tr><td>112</td><td>Total number of Seva E - Dip Registrations received for December-2025 : 

-  Thomalaseva:  **648013**
-  Archana:  **639416**
-  Astadala Pada Padmaradhana:  **596010**
- Suprabhatham: **717108**

For selected list, please [Click Here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/PROD_DIP_SELECTION_2025_12_20_2025_12_20_EDIP_SELECTIONS.pdf?updated_at=2025-12-20T05:11:33.105Z)
 </td><td>Seva E-Dip</td><td>false</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
