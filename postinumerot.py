import http_pyynto


def ryhmittele_toimipaikoittain(numero_sanakirja):

    paikat = {}
    for postinumero, nimi in numero_sanakirja.items():
        if nimi not in paikat:
            paikat[nimi] = []
        paikat[nimi].append(postinumero)

    return paikat


def main():

    toimipaikka = input('Kirjoita postitoimipaikka: ').strip().upper()

    postinumerot = http_pyynto.hae_postinumerot()

    paikkakunnat = ryhmittele_toimipaikoittain(postinumerot)

    to_string = (", ".join(paikkakunnat[toimipaikka]))
    
    print(to_string)


if __name__ == '__main__':
    main()
