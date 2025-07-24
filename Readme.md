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
<table><thead><tr><th>ID</th><th>Data</th><th>CTA</th><th>Is Internal Redirection</th><th>Redirection Link</th></tr></thead><tbody><tr><td>75</td><td>Tirumala and Tirupati Accommodation Quota for October-2025 will be available for booking w.e.f. 24.07.2025, 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>Tirumala and Tirupati Accommodation</td><td>true</td><td>N/A</td></tr><tr><td>76</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for August-2025 will be available for booking w.e.f, 24.07.2025, 10:00 AM. Please [Click Here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>Special Entry Darshan (Sri PAT)</td><td>true</td><td>N/A</td></tr><tr><td>67</td><td>For selected list of Angapradakshinam Seva tickets eDip registrations for Tirupati (Urban & Rural) and Tirumala Locals, Please [Click here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/Angapradakshinam_DIP_Results_24-07-2025.pdf?updated_at=2025-07-24T10:57:25.186Z) 

The selected pilgrims shall pay a deposit amount of Rs. 500/- before 12:00 PM on 25.07.2025, to confirm their Angapradakshinam Seva.</td><td>Angapradakshinam Seva tickets eDip registrations</td><td>false</td><td>N/A</td></tr><tr><td>71</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for October-2025 will be available for booking w.e.f. 22.07.2025, 3:00 PM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Srivari%20Temple&sevaName=All&flowIdentifier=virtual-seva)</td><td>The Online Seva (Virtual participation)</td><td>true</td><td>N/A</td></tr><tr><td>77</td><td>TTD - Local Temples Seva Quota for August-2025 will be available for booking w.e.f 25.07.2025 at 10:00 AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>TTD - Local Temples Seva</td><td>true</td><td>N/A</td></tr><tr><td>78</td><td>Sri Srinivasa Divyanugraha Visesha Homam at Saptha Gau Pradhakshina shala, Alipiri Tickets for the month of August-2025 will be available for booking w.e.f. 25.07.2025, 10.00 AM. Please [Click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sapthagiri%20Gau%20Pradakshina%20Shala&sevaName=Sri%20Srinivasa%20Divyaanugraha%20Homam)</td><td>Sri Srinivasa Divyanugraha Visesha Homam</td><td>true</td><td>N/A</td></tr><tr><td>87</td><td>The Online Quota of General Srivari Seva for Tirumala and Tirupati, Navaneetha Seva, Parakamani Seva and Group Supervisor Seva for Tirumala for the month of September 2025 will be released at 3 PM on 25-07-2025.</td><td>Srivari Seva</td><td>null</td><td>N/A</td></tr><tr><td>74</td><td>Special Entry Darshan (Rs.300) tickets for October-2025 have been completed.</td><td>Special Entry Darshan (Sri TT)</td><td>true</td><td>N/A</td></tr><tr><td>89</td><td>General Srivari Seva quota for Brahmotsavams-2025 i.e. from 22.09.2025 to 01.10.2025 (10 days slot) will be available for booking from 29.07.2025 10.00 AM. Age limit 18 to 50 years only.</td><td>Srivari Seva (Brahmotsavam)</td><td>null</td><td>N/A</td></tr><tr><td>88</td><td>Parakamani Sevaks who book seva from 26.09.2025 to 28.09.2025 will be allowed for Srivari Darshan only on 27.09.2025, in view of the Srivari Garuda Seva on 28.09.2025.</td><td>Srivari Seva</td><td>null</td><td>N/A</td></tr><tr><td>70</td><td>Srivari Arjitha Seva tickets quota for the Sevas like Kalyanam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva for October-2025 has been completed.</td><td>Srivari Arjitha Sevas</td><td>true</td><td>N/A</td></tr><tr><td>73</td><td>Senior Citizens / Physically challenged quota for October-2025 has been completed.</td><td>Senior Citizens / Physically challenged quota</td><td>true</td><td>N/A</td></tr><tr><td>69</td><td> Total number of Seva E - Dip Registrations received for October-2025 Srivari Arjitha Sevas and check below for the registered list :

Thomalaseva: **450055**

Archana: **444371**

Astadala Pada Padmaradhana: **429341**

Suprabhatham: **495715**

For Selected list Please [Click Here](https://ttdevasthanams.ap.gov.in/assets/misc/images/v4/PROD_DIP_SELECTION_2025_07_21_2025_07_21_EDIP_SELECTIONS%201.pdf)</td><td>Srivari Arjitha Seva tickets Electronic DIP Registrations</td><td>false</td><td>N/A</td></tr><tr><td>84</td><td>The periodical Seva "Pushpayagam" in Srivari Temple, Tirumala will be conducted on 30.10.2025, Seva tickets have been completed.</td><td>Pushpayagam</td><td>true</td><td>N/A</td></tr><tr><td>72</td><td>Tirumala Angapradakshinam tokens for October-2025 have been completed.</td><td>Tirumala Angapradakshinam</td><td>true</td><td>N/A</td></tr><tr><td>85</td><td>Darshan & Accommodation Quota to the SRIVANI Trust (Rs. 10,000/-) donors for the month of October – 2025 will be available for booking w.e.f 23.07.2025 from 11:00 AM onwards</td><td>Srivani Trust</td><td>null</td><td>N/A</td></tr><tr><td>11</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook)</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>12</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>N/A</td><td>null</td><td>N/A</td></tr><tr><td>13</td><td>To enable self service for the existing    donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice) </td><td>donor self service</td><td>null</td><td>N/A</td></tr></tbody></table>
