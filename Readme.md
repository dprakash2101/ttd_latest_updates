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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>112</td><td>Total number of Seva E - Dip Registrations received for January-2026 and check below for the selected list   : 

- Thomalaseva: **446206**

- Archana: **440547**

- Astadala Pada Padmaradhana: **424692**

- Suprabhatham: **489717**

- Angapradakshinam: **378771**

Please [Click Here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/PROD_DIP_SELECTION_2025_10_21_2025_10_21_EDIP_SELECTIONS.pdf)</td><td>Seva E-Dip</td><td>false</td><td>N/A</td></tr><tr><td>102</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for January-2026 will be available for booking w.e.f. 23.10.2025, 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&flow=arjitha-seva)</td><td>Arjitha Seva</td><td>true</td><td>N/A</td></tr><tr><td>95</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for January-2026 will be available for booking w.e.f. 23.10.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>Virtual Seva</td><td>true</td><td>N/A</td></tr><tr><td>104</td><td>Senior Citizens / Physically challenged quota for January-2026 will be available for booking w.e.f. 24.10.2025, 3:00 PM. Please [Click Here](/pld/slot-booking?flow=pld&flowIdentifier=pld)</td><td>PLD</td><td>true</td><td>N/A</td></tr><tr><td>105</td><td>Special Entry Darshan (Rs.300) tickets for January-2026 will be available for booking w.e.f. 25.10.2025, 10:00 AM. Please [Click Here](/slot-booking?flow=sed&flowIdentifier=sed)</td><td>SED (SRI TT)</td><td>true</td><td>N/A</td></tr><tr><td>106</td><td>Tirumala and Tirupati Accommodation Quota for January-2026 will be available for booking w.e.f. 25.10.2025, 03:00 PM. Please [Click here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>ACC</td><td>true</td><td>N/A</td></tr><tr><td>76</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for November-2025 will be available for booking w.e.f, 25.10.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>Special Entry Darshan (Sri PAT)</td><td>true</td><td>N/A</td></tr><tr><td>77</td><td>TTD - Local Temples Seva Quota for November-2025 will be available for booking w.e.f 27.10.2025 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>TTD - Local Temples Seva</td><td>true</td><td>N/A</td></tr><tr><td>107</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of November-2025 will be available for booking w.e.f. 27.10.2025, 10.00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sapthagiri%20Gau%20Pradakshina%20Shala&sevaName=Sri%20Srinivasa%20Divyaanugraha%20Homam)</td><td>Homam</td><td>true</td><td>N/A</td></tr><tr><td>116</td><td>Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban and Rural) and Tirumala locals (only) for 25.10.2025 (Saturday) will be available between 10:00 a.m. to 4:00 p.m. on 23.10.2025. Please [Click Here](/agp/dashboard?flow=agp&flowIdentifier=agp)</td><td>Angapradakshinam Seva tickets eDip registrations</td><td>true</td><td>N/A</td></tr><tr><td>118</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of January – 2026 will be available for booking w.e.f 24.10.2025 from 11:00 AM onwards</td><td>SRIVANI Trust</td><td>null</td><td>N/A</td></tr><tr><td>91</td><td>There is no change in the reporting day of Parakamani Sevaks.
 
They should report one day before their Seva Date by 2PM as usual at Seva Sadan-2 in Tirumala.</td><td>Srivari Seva Parakamani reporting</td><td>null</td><td>N/A</td></tr><tr><td>114</td><td>In view of TTD administrative reasons, the Vaikunta Dwara Darshanam – Special Entry Darshan and SRIVANI Break Darshan tickets will not be released with the December 25 quota release. A separate notification regarding the revised quota release schedule will be issued in due course.</td><td>Vaikunta Dwara Darshan</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
