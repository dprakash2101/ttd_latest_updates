# TTD Web Scraper API

API for scraping latest updates from TTD website.

## Description

This API provides endpoints to fetch the latest updates from the TTD (Tirumala Tirupati Devasthanams) website. It scrapes data from the website and returns it in a structured JSON format.


## Latest Updates

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Tag</th>
      <th>Data</th>
      <th>Published At</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>49</td>
      <td>Arjitha Sevas (Seva e-DIP) Registration Count</td>
      <td>Total number of Registrations received for September - 2024 Srivari Arjitha Sevas e-DIP quota:
        - Thomala seva : **328818**
        - Archana : **324004**
        - Astadala Pada Padmaradhana : **313386**
        - Suprabhatham : **360105**
        For Selected List [Click here](https://ttdevasthanams.ap.gov.in/misc/images/v4/2024_06_20_EDIP_SELECTIONS.pdf)
      </td>
      <td>2024-06-20T04:37:33.232Z</td>
    </tr>
    <tr>
      <td>52</td>
      <td>Arjitha Sevas (Virtual)</td>
      <td>Srivari Arjitha Seva (Virtual participation) and connected Darshan quota for Kalyanothsavam, Unjal Seva, Arjitha Brahmotsavam & Sahasra Deepalankara Sevas of Srivari Temple, Tirumala for September-2024 will be available for booking w.e.f. 21.06.2024 3:00 PM. Please [click here](/virtual-seva/seva-instructions?templeName=%27Srivari%20Temple%27&flowIdentifier=virtual-seva&flow=virtual-seva)
      </td>
      <td>2024-04-16T06:41:06.744Z</td>
    </tr>
    <tr>
      <td>53</td>
      <td>Angapradakshinam</td>
      <td>Tirumala Angapradakshinam tokens for September-2024 will be available for booking w.e.f. 22.06.2024 10:00 AM. Please [click here](/apd/slot-booking?flow=apd&flowIdentifier=apd)</td>
      <td>2024-06-12T11:20:48.374Z</td>
    </tr>
    <!-- Add more rows as needed -->
  </tbody>
</table>

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
