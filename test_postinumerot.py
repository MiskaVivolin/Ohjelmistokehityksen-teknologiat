import postinumerot

from http_pyynto import hae_postinumerot

posti_info = hae_postinumerot()

def testporvoo():
    numerot = postinumerot.ryhmittele_toimipaikoittain(posti_info)

    tulos = numerot["PORVOO"]

    tulos_str = ", ".join(tulos)

    assert tulos_str == "06100, 06401, 06151, 06150, 06101, 06500, 06450, 06400, 06200"

def testlieksa():
    numerot = postinumerot.ryhmittele_toimipaikoittain(posti_info)

    tulos = numerot["LIEKSA"]

    tulos_str = ", ".join(tulos)

    assert tulos_str == "81701, 81700, 81720"

def testhanko():
    numerot = postinumerot.ryhmittele_toimipaikoittain(posti_info)

    tulos = numerot["HANKO"]

    tulos_str = ", ".join(tulos)

    assert tulos_str == "10901, 10900"
    
    