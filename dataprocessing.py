import json
import requests
import flask
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from random import randrange
app = flask.Flask(__name__)
keyword = ""

def gen_scraper(url):
    HEADERS = ({'User-Agent':
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36', 
                'Accept-Language': 'en-US, en;q=0.5'})

    # http request for site
    webpage = requests.get(url, headers=HEADERS)
    if webpage.status_code > 500:
        print("Page was blocked.")
        return None
    soup = BeautifulSoup(webpage.content, "lxml")

    # obtaining domain of website
    domain = urlparse(url).netloc

    return (soup, domain)


def company_scraper(soup, domain):
    amazon_attributes = {"product_attr": ["span", {"id": 'productTitle'}],
                         "company_attr": ["a", {"id": 'bylineInfo'}]}

    walmart_attributes = {"product_attr": ["h1", {"itemprop": 'name'}],
                         "company_attr": ["a", {"class": 'bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button mid-gray pointer f6'}]}

    if domain == "www.amazon.com":
        attributes_to_use = amazon_attributes
    elif domain == "www.walmart.com":
        attributes_to_use = walmart_attributes
    else:
        print("Website not yet supported.")
        return None
        
    # get name of the product
    product = {}

    # get name of product
    try:
        prod_title = soup.find(attributes_to_use["product_attr"][0], 
                               attrs=attributes_to_use["product_attr"][1])
        prod_title_val = prod_title.string
        prod_title_string = prod_title_val.strip().replace(',', '')

    except AttributeError:
        prod_title_string = "NA"

    # get name of company
    try:
        company_title = soup.find(attributes_to_use["company_attr"][0], 
                                  attrs=attributes_to_use["company_attr"][1])
        company_title_val = company_title.string
        company_title_string = company_title_val.strip().replace(",", '')

    except AttributeError:
        company_title_string = "NA"

     # get metadata about the product
    # try:
    #     metadata_formatted_list = []
    #     metadata_list = soup.find_all(attributes_to_use["metadata"][0],
    #                                     attrs = attributes_to_use["metadata"][1])
    #     for m in metadata_list:
    #         m.string
    #         metadata_formatted_list.append(m)

    # except AttributeError:
    #     metadata_formatted_list = []

    product.update({"product": prod_title_string})
    product.update({"company": company_title_string})
    product.update({"domain": domain})
    # product.update({"metadata": metadata_formatted_list})

    return product


def api_request_verification(url):
    try:
        request = requests.get(url)
    
    except requests.exceptions.HTTPError as e:
        print(e.response.text)
        return None

    response_json = request.json()
    #formatted_response = json.dumps(response_json, indent = 2)
    return response_json
        
def call_disaster_api(json_obj):
    if json_obj == None:
        print("No JSON object.")
        return None
    
    formatted_json = json.dumps(json_obj, indent = 2)
    print(formatted_json)

def call_charity_api(json_obj):
    # printing to test for values
    formatted_json = json.dumps(json_obj, indent = 2)
    print (formatted_json)

    # add links, urls, etc. 

    # choose at random which should be matched

def search_charities(url):
    ...

def call_esg_api(domain):
    esg_scores = {}
    if domain == "www.amazon.com":
        esg_scores = {'total_risk': 30,
                      'environment_risk': 5.6,
                      'social_risk': 14.8,
                      'governance_risk': 9.9,
                      'string': 'high'}
        return esg_scores

    elif domain == "www.walmart.com":
        esg_scores = {'total_risk': 24.6,
                      'environment_risk': 4.4,
                      'social_risk': 13.9,
                      'governance_risk': 6.3,
                      'string': 'medium'}

        return esg_scores
    else:
        print("Company not supported yet.")
        return None

#     esg_reports = {}
#     domain_clean = domain.replace('www.', '') # not general enough
#     domain_clean = domain.replace('.com','') # not general enough
#     # making a call to the api
#     esg_request_url1 = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q="
#     esg_request_url2 = "&token=908167892ef856ccda3872036d98ce10"
   
#     # first trying with specific vendor of the product
#     try:
#         r = requests.get(esg_request_url1 + company + esg_request_url2)
#     except requests.exceptions.HTTPError as e:
#         print(e.response.text)

#     # trying with e-commerce host (i.e. amazon) if company does not have ESG rating
#     try:
#         r = requests.get(esg_request_url1 + domain_clean + esg_request_url2)
#     except requests.exceptions.HTTPError as e:
#         print(e.response.text)
#         return None
        
#     # if a successful call is made
#     response_json = r.json()
#     esg_reports.add() # total, env, social, gov

# implementing routes
@app.route("/products", methods=["POST"])
def create_product_info():
    file1 = open("/Users/karfania/Downloads/user-info.json", 'r')
    text = json.load(file1)
    url = text["url"]
    scrape_tuple = gen_scraper(url)
    product = company_scraper(scrape_tuple[0], scrape_tuple[1])

    print(product['product'])
    print(product['company'])
    print(product['domain'])

    return flask.jsonify({'product': product['product'],
                          'company': product['company'],
                          'domain': product['domain']})

@app.route("/disasters", methods=["POST"])
def create_disaster_info():
    natural_disasters = api_request_verification("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=10")
    return natural_disasters

@app.route("/search", methods=["GET"])
def get_charity_search():
    keyword = flask.request.args.get('keyword')


@app.route("/charities", methods=["POST"])
def create_charity_info():
    if not keyword == "":
        charity_list = api_request_verification("https://partners.every.org/v0.2/browse/" + keyword + "?apiKey=420cbc91eca55c118a8c839f968c7af9")
        if charity_list == None:
            charity_list = api_request_verification("https://partners.every.org/v0.2/browse/environment?apiKey=420cbc91eca55c118a8c839f968c7af9")
    else:
        charity_list = api_request_verification("https://partners.every.org/v0.2/browse/environment?apiKey=420cbc91eca55c118a8c839f968c7af9")
   
    return charity_list

@app.route("/esg", methods=["POST"])
def generate_esg_risk():
    file1 = open("/Users/karfania/Downloads/user-info.json", 'r')
    text = json.load(file1)
    url = text["url"]
    domain = urlparse(url).netloc
    esg = call_esg_api(domain)
    return flask.jsonify({'total_risk': esg['total_risk'],
                          'environment_risk': esg['environment_risk'],
                          'social_risk': esg['social_risk'],
                          'governance_risk': esg['governance_risk'],
                          'string': esg['string']})

def main():
    # esg_rating = call_esg_api(product.get(company), product.get(domain))
    app.run(host="localhost", port =8080)



    # # upon opening the extension, call the donation and disaster APIs
    # natural_disasters = api_request_verification("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=10")
    # call_disaster_api(natural_disasters)
    # #disaster_matching(natural_disasters) -- later

    charity_list = api_request_verification("https://partners.every.org/v0.2/browse/environment?apiKey=420cbc91eca55c118a8c839f968c7af9")
    call_charity_api(charity_list)

    # after the above 'pre-processing':
    # imagine extension is at a url for a product on amazon
    scrape_tuple = gen_scraper("https://www.amazon.com/Natures-Bounty-Supplement-Supporting-Cardiovascular/dp/B000NPYY04/ref=zg-bs_6943343011_sccl_2/147-4502840-2384645?pd_rd_w=xMGu7&content-id=amzn1.sym.7cc5d8c9-0275-49fe-af63-f984f7dc4330&pf_rd_p=7cc5d8c9-0275-49fe-af63-f984f7dc4330&pf_rd_r=R7923MPZV4JSFGXK22YK&pd_rd_wg=lBV2i&pd_rd_r=e91f94bd-f44a-41c4-9ce5-48cd3b0a0e70&pd_rd_i=B000NPYY04&psc=1")
    product = company_scraper(scrape_tuple[0], scrape_tuple[1])

if __name__ == '__main__':
    main()
