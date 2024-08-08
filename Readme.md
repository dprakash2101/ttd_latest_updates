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
<table><thead><tr><th>ID</th><th>Tag</th><th>Data</th><th>Published At</th></tr></thead><tbody><tr><td>40</td><td>Varalakshmi Vratham - Arjitha Seva</td><td>Varalakshmi Vratam Seva Tickets for 16.08.2024 in Sri Padmavathi Ammavari Temple, Tiruchanoor will be available for bookings w.e.f. 09.08.2024 10:00AM. Please [Click Here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=Varalakshmi%20Vratham)</td><td>2024-08-08T10:22:33.982Z</td></tr><tr><td>42</td><td>Varalakshmi Vratham</td><td>Varalaksmi Vratham (Online Participation) Seva tickets for 16.08.2024 in Sri Padmavathi Ammavari Temple, Tiruchanoor will be available for booking w.e.f. 09.08.2024 10:00 AM. Please [Click Here](/virtual-seva/seva-instructions?templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=Varalakshmi%20VrathamflowIdentifier=virtual-seva&flow=virtual-seva)</td><td>2024-08-08T10:24:21.448Z</td></tr><tr><td>49</td><td>Additional Angapradakshinam tickets</td><td>Additional 250 tickets of Srivari Angapradakshinam for 10.08.2024 will be available for booking on 09.08.2024 at 12 Noon. Please [Click Here](/apd/slot-booking?flow=apd&flowIdentifier=apd)
</td><td>2024-07-20T04:42:06.823Z</td></tr><tr><td>50</td><td>Sri KRT - Pavitrotsavam</td><td>The Periodical Seva Pavithrotsavam in Sri Kodanda Rama Swamy Temple, Tirupati will be conducted from 31.07.2024 to 02.08.2024, The Seva Tickets will be available for booking w.e.f 25.07.2024 (Thursday) from 4:00 PM.

Please [Click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Kodanda%20Rama%20Swamy%20Temple&sevaName=Pavithrotsavam)

</td><td>2024-07-25T10:08:30.882Z</td></tr><tr><td>52</td><td>Arjitha Sevas (Virtual)</td><td>The Online Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for October-2024 will be available for booking w.e.f. 22.07.2024 3:00 PM.
Please [click here](/virtual-seva/seva-instructions?templeName=%27Srivari%20Temple%27&flowIdentifier=virtual-seva&flow=virtual-seva)</td><td>2024-04-16T06:41:06.744Z</td></tr><tr><td>58</td><td>Accommodation</td><td>Tirumala and Tirupati Accommodation Quota for October-2024 will be available for booking w.e.f. 24.07.2024 03:00 PM. Please [Click Here](/accommodation/instructions?flow=acc&flowIdentifier=acc)</td><td>2024-06-12T11:22:06.189Z</td></tr><tr><td>59</td><td>N/A</td><td>To generate Digital passbook for the donations made before September 2016, please [click here](https://tirupatibalaji.ap.gov.in/#/donorPassbook).</td><td>2023-11-22T14:20:06.620Z</td></tr><tr><td>60</td><td>N/A</td><td>The Advance booking Arjitha Seva ticket holders of Sahasrakalasabhishekam, Vishesha Pooja, Nijapada darshanam are requested to avail Break Darshan or to get refund instead of Seva for their booking made in advance. Please [click here](https://arjithaseva.tirupatibalaji.ap.gov.in/#/) to avail break darshan or to get refund.</td><td>2023-11-22T14:20:16.980Z</td></tr><tr><td>64</td><td>Donor Self Service</td><td>To enable self service for the existing donors, please [Click here](https://tirupatibalaji.ap.gov.in/#/donorSelfservice).</td><td>2024-01-16T05:12:09.518Z</td></tr><tr><td>65</td><td>SED Sri PAT</td><td>Sri Padmavathi Ammavari Temple, Tiruchanoor Special Entry Darshan (Rs. 200/-) tickets for August-2024 will be available for booking w.e.f, 24.07.2024 10:00 AM. Please [click here](/spat/slot-booking?flow=spat&flowIdentifier=spat)</td><td>2024-02-24T06:50:05.802Z</td></tr><tr><td>66</td><td>Local Temples Arjitha Sevas</td><td>TTD - Local Temples Seva Quota for August-2024 will be available for booking w.e.f 25.07.2024 at 10:00 AM.
Please [click here](/arjitha-seva/slot-booking?section=pilgrim-details&flowIdentifier=arjitha-seva&templeName=Sri%20Padmavathi%20Ammavari%20Temple&sevaName=All)</td><td>2024-06-12T11:22:52.407Z</td></tr><tr><td>68</td><td>Darshan And Accommodation for Trusts</td><td>Darshan & Accommodation Quota to the Trusts / Schemes Donors for the month of OCTOBER - 2024 will be available for booking w.e.f 29.07.2024 (Monday) from 11:30 AM onwards.</td><td>2024-05-25T06:41:29.714Z</td></tr></tbody></table>
