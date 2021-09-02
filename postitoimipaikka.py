
import urllib.request 
import json

with urllib.request.urlopen('https://raw.githubusercontent.com/theikkila/postinumerot/master/postcode_map_light.json') as response:
    data = response.read()

postidata = json.loads(data)

nimi = input("Kirjoita postitoimipaikka: ")

print(postidata[nimi])