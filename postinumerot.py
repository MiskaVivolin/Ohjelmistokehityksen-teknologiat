import urllib.request 
import json

with urllib.request.urlopen('https://raw.githubusercontent.com/theikkila/postinumerot/master/postcode_map_light.json') as response:
    data = response.read()

postidata = json.loads(data)

kaupunki = input("Kirjoita postitoimipaikka: ")

for nimi, luku in postidata.items():
    if postidata[nimi] == kaupunki:
        print(f'{nimi} ({luku})')