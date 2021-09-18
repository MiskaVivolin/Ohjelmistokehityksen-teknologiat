import nimet


def test_lyhenna_j_l_runeberg():
    lyhennetty = nimet.lyhenna_nimi("Johan", "Ludwig", "Runeberg")
 
    assert lyhennetty == 'J. L. Runeberg'


