import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const naveedHeadshotDataUri =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAEAAQADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAgMGBwEEBQAI/8QAQBAAAQMDAgQEAwYEBgEDBQAAAQACAwQRIQUxBhJBURMiYXEHgZEUIzKhscEVQlLRCCRDYuHwMyVy8SY0U4Ki/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAEDAgQFBv/EACMRAQACAgIDAAMAAwAAAAAAAAABAgMREiEEMUETUWEUIjL/2gAMAwEAAhEDEQA/AFtblMAssMCbyrpGAEbRZYAsmWuFRjluB2RNFvdYyjaOoQeGSs8oKJrVm2bhBi2cIwOqyBdGG2tZBiyNgus8mFDOMOPG6TK/TNLH2nULZazaMnYE9/RBKNQ1eg0xn+bqY4Sdmk+Y+w3UZqfipw9Tglsk7x0d4RAP1VT6hqOo0Fa+XUpJH1b8nkm/CDnobriS15kldI+73uN/Oeb81FW3L8YoZmufDA2KO9mlzS9x+QsFoj4x10Ml/sDZ4wM38h/UqqD/AOQucHC+4HRblBEKl/IDY3QXFSfGjSJGD7XRVcLiNm2cPl3Ui0vjrQNZHLTV7GPtcMm8jiPnuqCnpnMcCXcwvZwvlpT4qXYCQMdhzb9/RB9FTalQ00Bmmq4WRDd5dhKpdZoa8E0c7J7YPKbW97qntHndU18ENQG+fyP7A9wP3XY0KY6bxjHSsIa2RgaTsD1/T9EFpeI02D7NJ2zusFv0WhLVQtqDJUyhsVOLhztr9SsU/E+k1UvhQVkcj7nAOVUb5b0WHNOASmMc2Vge0gg7EHdYcDdAojvlARY+icR1Qkd1QogE5QuaQU4tQFpOygQ4HN163dNLOlkJaAUCXpT23WwW9SlvbYYRRNB3TAfohafoiAsfREGGjcog3C80ArIxhBgDNkbRZYsOa4TWDm3RXvRG1t1jlymNaQcIjzRdeJawOc4hrQLknYIwOllCviLxV/B6X7DTDmqpWE23DR3P/coNLi/jmVlPIzT5/AYQ4NluATbqPnt3VVzV0VHUSPZKZ53Al8r73Lze5/73XPrqmprpr1Epe4YycN9AEhzREcyNv2Auoo3vfUuLn3LnZuRgr32cxxF7sW3BOPqvCrMQALuYdiAQmRV+Q3ww5pwQBuPZA+COMtZNKB4ZNnZ2SpS2lm8WInl5i09Cw9j7psUAe0shLgx38pFwE+Ph2uqD5IXOAFjYbjoueUQ7iky1Kqp+8D2uu4C//uC16up5mBzCRbPsuyeEtQIN4HgtGMbhak/DddGCDC6wG9vVSLwvCTNN1uSKSKdxzHIOYntcKRabr8Ulc3ULAPa8lhPT1+ihj9OqYvKYXgW2sgM0jJGtuWgY9gutuZqskVcvGErjUzSQ6fG7LAbeJboT1Xd0/huhdAQ2FkYt924WEgPe+4+qgWma2aenEbAGBv8AMe3uU+fV9TqwL1swjvflY4i/6KuVs8L1UxoGCe4ex7mSDpubOCkDm9VR/D3HNZw7Wxx1MjqijceV8ZPM4DuDffqrq0yvp9WoYq2mkEkMou1wVgMLbHKBzc3Ca9ub2QuF1ULLUJAHumlpCBw7qBZaeiBzbJuM3QkIEndLfnonOCEg5sEA8vdGBleAIdlFi90BApjW8wvbKBZbcIDDRdGBYFeYASiaMnsgIBMAu26AWPRG3GCgxJKynifLI4NYwcziegXzvx5xUNa1+rnpQ9kHNytcfxOAFvp1srN+L3EbtJ0L7DBcTVZsXA25WjP5qio4pKgnmNr5+SBbJhzguB5RkgLMtQJpPI1wb2AyjqqZoYC15I7Wtf2Uj4T4eZNy1E7bnoCuL2isbaUpNp1DT0PhKu1WRpAfFGf6sqxND+FtLYOncXO9F2tD01sDQA3fYBTHTaU2F8ey8GTPafT6OLxqx7cjTvh/pFIP/tw93qu7T8LadEAWUwafRdWGnsbALbbCAL7lY8rS9UUrHxyHaPS4/wAuwW62WrLw5p7stp2322UkdBfG6E0lxjCnZqsoZVcH6eWn/LNGFXfGHw1a5r6mhiDHtFwAMFXhNTYyFz6qhaYzzC/ouqZbVlxfDW0enybVNqKWoMNQXscw2sRstvT3ztdeN4zu69yrH+JnB8OayCMNeck2vdV3pxcyYRyNbYH8JzdfSx35Rt8nLj4W1LpTwwNjBqI3PDgMtFrKxfg4ZnUdS1sznUoddsbj+BxKreqm5ZbeA4xiwtc4PsVM/hoaiLWXupvEigcAZGD8JP8A8XWjJbjm9LIXMTbEjaxXiAQqNcg9EBAO4T3BAW9bKoU5mUBblOcEsjGdlAl7LYCDl3BTyLoHN37IpW5TAQG2ssOFllqIJo5spnLhCwgYTGuG1kGWAhGASsXCJu90GQUxpubIbCxWWjlygqT4wRMn1alha5xLY+ZwHrtftsq8cyRptH4bWDoL3J/dXpx/QwDTJKswgymwLvy/RU5WsDS57vu222Byf7KSOfTQOkqAZOXtYqwuHqJrImWFhfZQLTGOlqQWtDYwcAKz9DYGRxgj3Xlz2ezxq97SfToGxtBvYqSUFhbsuFSZAIXcoySBjdeGZfTq7UNgL7LYZyuG2e61oQbA2vZbABGArCyYOVp7ozkdgtdzze1sBGwOOT12CpoMwwRb2WrPGCy3VbjmucDcYCRUW5djey5lYQziygFXRyNta17FUTWUTo62SN5GXeUm1l9F6rTOqaeQNPTCpDi7T5oqieSNo5r3LfVevxbfHz/Mp9R1/iRVHJNFZ7c39P3VmfDqjLdRc+CR0kPgsfzEbXxb/vqq9oJ4q6FrZQBLGbAOybW2V58F6M3RtEgYCHOlaJCQO42/Ne1893A24IS3tsfRNftcID5m7KhRHVCQMm6byC2d0st3RCrXCBzbDOyafL0whfnNkUkjCAjBTHCy8QHC2yDXB7owbnZKDiQjGb2UQ1re4TWAC4Smvxa6MYVBAXN9k1tgNkoXGUxiKYPTZG0WQA2TG9+iI1dWoo9T0+amkF2vaR7HuvnTWKH/ANRkbI8sDDYA3ubei+l7XBVG/EbSvsHEEoaBaVpkFut1JVyeGaQVFW54H3bVOaaSOn88jwxgGSTZRrg+H/IvkPVxGFocRVtbV1RgiaW0zDgnAcvJNedtPZW3CsStLS9donx2bMztuutDxLQNeGCoZk2JCoFlNqM/KyNknKD/ACPwfkCuhRSanQOa00swIt5i4J/j1/ax5N/0+mtPrIJYrteM7G/1XRDWSRhzTv0VMcMa7NI0eIZIxzAlpwdt1ZWnaqHvawPBACxtXXT2UvyjbuMY0NdI82a3dFLWUtNEHySNa07KP6/qBpoC0PIbID8lVvEmv6nMySnp3yPuALjp6DslaxKZLzC1K/jbR6bna6p5SDbOLnt7qI6r8WKSCU+C3xmDcbEfVVxRaDxFqch5jTxMIt99ILrch+G2rxZfWU9j0a64C2jHj+y805c3yFo6NxFR640vp5bm3mjOCFCPirpbYadupQAseD5rdVoaNoNboGowzwzPmeHAPZHkFt+1sqUcfT01Xw/Usjmie9gyzmFwexWcY+N44u5yc8cxf2qvh6COr1KndeM+I8C18/RfQ8TBHG1gFgAAFRfBGlSy63E2SilYYHNLyBcDrfsr2Y5rmhzMjuvdFo3p86azEb+BPoEOyY4HdYOei6QBS3YvZGW3F0sogBm6Eg37oycLAIsRZFKkA7JRCa+56JRBKI1GGya1v0WuG2Geia1xIsoHAAFMaQd0hpsU1psiniwKJn4rdEq6Y226qHWAxZNFh1sUkWcExg6Ioz+E+nRUzxfVy8RVEkjZx/ly5paxoBAvsTurotfACpqopxC3VHEWu9/5XWGa0xrT0ePSLb252kmQaF/lqVkfiONgDzdc790qspovtz6uSCFjQBdjb798ro6YzwtHpmN35Afqtir0cV8YLX/eEZGyynJO2tccTDiU/ENXPI6CjiLyxpc5kdhygd3f2WaHXZdamj099HD9pklZExniv5zzX819rA2+q6+l6G7TJOeOlkhd/UzN13dG0elgk8SOhaZTnn8AAg+6kXpHxp+O8/UWq6Wr0OqfC50kVRGSTDIblwHVrhhwUy4Olm1TUJKed0tmhp5QeUi4Btj3Stc05rxyNp4mSfzSAZA911Ph9S+DqFRNKCXSEZO9hgLO94100pjnlG3d40hbpekQ+G+YRh4Bj5i8G/vc/RVpqdFVnALYg8i55vwg9T1+iu/XtObqdB4eOYWc09iMhRmu0U6jTlnM5rm7jfK4rf8AbW2Pvr0paZ2v6VXzw0klXMzlcIn0zAGg4s44Nxvhb9c/XtJjp/GkfVvkYHPfA3lfC4j8Jthysyl4cqKcO5WxOvjJITn6Y6V/3zYR7G9/yWs5I16YxhmJ3tENCqtSqouVr3wSyM5DIMG3suzPwnRT6XUsqAZ5pWHme/clSCHSeQtcG2I2wgqmujuCLLL8tvUS0nFX3MOD8NKPxeH5fCZyzNc9j5DvcG36KZ0UJgpI2OJe4DJPVR34cSBtVrmnfhAqPFYbdxkKWStDSA3YCy2w7/LMvPn1GCsEkeiF2DjYph2sgdsV7nzinIWtsdsIiboS+wsdlQt5BJ7JZt06pnLf2KwWYUCnbIHDFgEwjcIHHl2Qc5xt7LINtkDc3N0bSuQbLk5T7gFIY+wJsmsN8lFOaeayYwHN0gb+icx4Coe2wF0xKbaycDYZCoNrrKn+P45aCtqaeI8rZHE39DlXA3KgHxO0zmEdUY7scwsLhu1w2/76LLLXcNsFtTMIpoMhqqGENzy+U+4wppo9GyQBpYLqA8DTOEdRE+945OvqrO0YsaG2ycLyZo09vjTvt1KXh6GXzctvZdOn4cjI5rv5R3KbSPa0W6LZ1DWYqGnJGABfKwrH7e2f4hnE0MdJVMiADQc27rY4YYDUlzbWPULmUddHxNV1lXM7AcWRg4sB/wArt8IQBhfnAdYLrXWnFe7Jo9hEQFs2utB3gwTCR9mh2DfZdaoZ/l2vta4XOqKWnqKKUSG2PzUmNOt7E6ip6m7m8pJ2svM0Nl7taAPZRD+LVWhVccNWHCJ5tG+6mlFxDHJDuLnYpERPsmZiOip6Dw22Iv2K4Gq0x5HuAzZSaeta5tzbK4OsTMFNK++ALqa76c3nrtEPh1WibUdUe5jecVDuY9eW1v1BU4J8ox0VQ6ZqY07UZp6e0YqJLvsT5s59DcK2mWcwEYFl9DFj42m37fKzZeVK1/Txz2QP9UXLlC65W7zFFDYG4THNtlY5R7IFOHKPZAXYtZG4H5JbhkooT1S3ZBRm6E26IOQ3ZG11uqQHeVGw3XA2GGwwnNckNwUYcDhUbG9kxpC12noMpjCb5VG0y26dzLUa8gJzH4QbTHWCiPxG1BsOkmnuOaU4747KVMcoH8ViRp8UwBtG8c5t0sURX/C1XatrGgAOweQZDc91YGjajykfuqr4fl+z6m+MNEfON97KbaPM51SWHzXOB6d15M0dvd419dLFh1qOCLnkePa65Wp67DNDK98ljbDb7KJcY6hLpzoI2SPax4BJFvyUVj1iSYlr33a0mzL7/NZ0xbjbfJ5Gp46bVdxFPolQ80sjQ1zruadrqfcAfEChqmmKeQQz2BDXdfZVPWUM9W4vawuLrdF0aHhqtrJjDGxsTibNJeGget/mtZx1mO2VcuSLbiH0Q7jSkZA5j52yH+VgyXHso0/id01YZamZwhFiIW4bcnFzve/RV83hTVqOpikLb+HFbnEt/NbpnqtysotQqp5JJXCNkjQXAvGCNv0U/HXXctJyZZnqqxNV1jS9UpJKepALSBY9Qe49lGqXWp9Cq20lTOJaaQ2il7+hUcr9XfQuY55jlMZy0G+PW3ZE7UKbUpHUZZaL8TSSbg+q4/FGic9ontZbK9zow4G4PqtHUqrxdPnaSbuBFhn5JTZv4bpEb5cnkF3dVx9an5dNkqGv5HtBJFtyssddy0zZNRpBIa62ougAa5sclgbZBvsVemmPM2nUzyLOdGCb+y+e9IjlquI6VzWNkM7mh4vh3QX+q+haGN8NHFG8Wc1gBHbC+m+Oc8W2SiUx2RdLcLqgDa+6wTjusvHzS/woBcgN9gjcbbIbgjKKW7Iz0S3EBMd+K6U/fARHHaB1RtGUtpBGEV3LhTmuHXdFa+eqW0990TTcqhzSbJoyEplgE1rgiGMT2m49Em+3RMbhVWwwjaygfxcMv8HibHflMgc/6KctOcLh8b6W3UdEnvfmjYXC3plVFEMd4ErQwi7hmykum6qylmje0hznm9/RRKukkEz2mwBaMjYY/wCFtadUgmz3NDGGxddZ3rtpS2lq1un0Gv0ccsjQJYgeQf1G235LmTcAUM+nCQxnxN+ZlwQuLpmsSVwbRte9kbbNJGcDNrdcX+qnOk6jyxmOZ8jm8oA5m25R39AvLNLVjp7K5KWntDKThWOkk5XmaaMHfnNwpPpvC9JUM8lXNEP6S69vqsavzUkgfTNc90hwGjF1im1arpXtY5wY8vAIOSe6RM2emmeuPqYSSi4QiY8Ml1GaWPHp+gW6/huiYSympg4AZfJm/wBVw5dfqm2Anc4F/IQDt2z0XW0ql1Osl5nOeYoyObm3Nt0t1HbSPJ3P+sOjpHDdFBFLGIogJbh5LRlQ6q4eg4a4hc5pElNIctO4v6dlYNVVwafSGWwaBg/7T6qr+LtcbX1UsjSY6iIAxkG7Ht6i/RZ4otaZY+TeIiJn26Wt6zFPanicXMaRcH+k/wBlFOKdcMVF4bAHgtLbXwACQD+65tfqropRUsaXNIDiSbEev6qLajqE1VUOLXHlcLW9CvVjx8XgyZeSU8BRmXiKjmdZzi+xDexyr8j/AAAXJti6qb4QaCyUOrn5MNg24z1F7+11bVgMBehg9bB6oLi9lk7X6oCc5QYkwfdKdcb9UTnXubZQOcDuMoBPdAbm9gi3NxsvOABRCzgZ2SXADKc8gpLxcEBFcVp5TconPNsbJXNf917O2y4D2usLdUQJuElvdNaDe6BrX2ddNYbkLXbe4unMIsbAqjbDgiaQSkMdjKczJVRsNKZJGJ4nxuAIc0ggpLXbAJzDynKD5++IegzaHq0jGZikcXg9wenuLqMUv3ZbDs+U59l9G8V8L0/EdCYZGgvA8ruoP/Qvn3VtNn0LVnQ1THNeHEEnOPRJIdnT66GJ3iSAtDb2iYLEje5tuT2Xe07UhUSOkla9jOYfdsNy91sC47KMMY+PTZjDgyTcrn+l9l09EndC1o5bh0rWRt6hvt3/ALpMLErZ4dkZVsMLo2jw97j8PzXSm0Klnc68Q/pLgckk7KH8KB32mQyy832Vhc49HTH9bYA9ipJNxBemlaHOBYGEFpvdxv5T8h+q8lsOp291M+66l2KPh+i05804iaXOI33Zj/hdKPUG0LZGRgNjYASA03F+oHUKDx8SPe2eWZzo2xv5+S+7LEG//ei3Xav9qmkpmvDS9jPCs70yPyXM4eTqPIioOLtc/iEn2B7Gu5zYOAsHe46G3VVfX10zTNBA8maE8waX2cLXBHrtupBqGpfbBUU9Q4iSNjQ4gbnNyCevX3CiGsskoazw5JHSSsu1slsPG9rfPK9OKkUjTyZck3ncubXVTXOELBaMgADrnzD9bLWo6Cqr650UbmeMHNZyjFwBghY882qNa1gc57mlo3OMfsrX+HvAggeNSrm3kLvJGRhvr9VoyTbhLR26JpEUHKBI5rXvI6my7Bd0XvwNAAwBYBevlVGObpZA780eGnKB4zhALsoCATdFknZA42ugwQBsgfk5RAeXOUo73QeebbJR63RubdLcDfGUVH2uITG97JIJeMJgJOVwGAkYsiDuXdBfGFlpv1ugcCPmmsNikDBumNJuMKjaD9k1jrLXansIthVGw3cZTQTsktAITWHCoN1VFSQyTzyNjjY0uc9xsGjuqm+I9DBreoGogu13I0i46W3t7Lf414lZrvEencK0MnNC6pb9re04dY35PbGUfFsRp9X5reSdgt7jp9FzkiYpyh3i1N+MqsfUTxyCjAB5GlzTt5gDbCkOgywuga1uZGSMezGXDlb1SNY0xpl+0sAa5ucBa2jVUTJIGC8Rjm5W32AIwPa65pflDrJTjKZ0UzqXQaCN0j2yVRdIXg/K49sn5plTqcNC6SZzj94xoDWnAc0WNz8lxpNYY+mZEYnBkbvPyi5gfc3FurTuPRL1CeKQ8gmjdIDcZt4gIv13/wDlds25VcQMj+6qHNa/w5A9rhgutfJ7ZHzugi17kfzNc4FjRhos4NIF7fVRfUnNnqSJCWNfa7eotv8AXyoKCsFVqrXSczY42EPA6NJuQfXH1TS7d7iTUTp7poCCZI2DnefxHmwPy6rlVlRNXUjYmuLpPC52WGegN/z+i1q2qqNT1eeSVr3MneC5trl1hbKsngLgq8v8RqwTfDIz0ba1j9FxkyRSNy7x45vOoDwdwQKaohr6qEmQtaGtcPwKbVWtfwTjebh+tAEdUBNRS2te4yw/MGy71Bp7paymgaAG8wPsBkqIfHnTiYKDWISWTU8vIHjcXyD8iPzV8SJyVtaTy9UtWsJe8kFYJuo5wTxZDxPpbHPcG1sLQJ4z3/qHoVIjvsu2TwyPQLBOFg3yFi1hlBjm6EoLXuvEDfqhuUHr23S3gEm3VZJyblA5wvhBi5yEG+yIlKub26IqOtNjhMY7GUluDhEPUrgODs+iNtrpIybBNBtiyB4TWjKSzfzJrSqh4ATGNIykh4YOZxDQOp2Uc1n4kaLpAdHHKa2dv8kOQD6u2VEwaQDzE2Cr3jv4lx0cUmmaLO187rtkqGZEfcNPU+vRQ3iL4g6xr4dFzikpXf6MR3H+47lRUuJdnZdaEg4Cl/8ArfTXPJN3PNz35Sra4k0s6xQvbHiePzxu7EKlOHag0nEWnVAxyztHyOP3V+wuvYla1iJjUs7TqdwqwvNQx7JGlsrSWvYdwVx6jS2ueXC7TsbdVZPFvBc9RfWdJYXStH30Lf529x6hRaCm8dvPyHmO4XzslLYbfx9HHauav9ReSOvoZnSQyl4PcXNux7oqpx1BsJDHRyMb57fhBBwR1H57KSu0Z7jflJC2qXRGEg8g6JGfpJ8btE59JqauQfZwJLssL3xfcLs6JwTVSGIVMrrXJcA3f0upzpWiQ4k5RjpZSfTtJYyQP5SP3Wd/Jn41p4sfUf0TgSjYBIIQCTe53U1pqaOiisLBoG/ZbEcTIm2Ass6JQu4m1R0IB+wUpBqH9JHdGD07rGkWzW4w3txw15O5wzRPbSv1CYEOnHLC07tZ3+f9lC/jkWx8IEG3M6dgH5q1Z2CwDbNDRgDoqU/xAagGUGn0INnSSukI9Gi37r7+OkUpxh8HJeb35SpXTNbrNEro6yilMcsZ+Th1BHUK5uFPiNpnEjY4JXCjrjgwvOHH/aevtuqJlBDiUAcWkEGxCxmNtIfUpt1QuIO26orh74la3ozWwvkFZA3+SfJA9HbqwdH+J2kakGsq+ahmOLPyw/8A7f3XHGXW0xvYEIDugjninjEsMjZIzs5hBBWXOxe11ALkDgV5zrlCUVg3CWTvZGTi10BOCgjTEeUDQB6I297XXAY0elkYSZZ2QsL5HtY0blxsAotq/wAQqGiLmUbTVSbXBswfPqmhMjK2NpdI4Na0XJJsAoxrfxI07TC6Kib9tmGLg2YD79fkq61niXU9aeftNQ7w9xEzDR8uq5hN913FUdfW+L9W11xFTUubD0hj8rB8uvzXJjaXH0G6BxDRfA91tRRgRjlPN3PddRBJbm9klzQFtFtwStSTKspB1IT9ohkbjkkaR9V9D6YPHpIn23aCvnqjb5h73V+8KTGfS4Qd+UZWuONwyyJXo9gQ02XH4s4Kihc7VaCKzSbzRtGB/uH7rq0TS1zSO6ltC1k0Ya8Ag4IVy44vXjJhyzjtyhUdNp0dQz8NynRaKI5Mbeqm2o8Mt0urc+Bo8CQ3Fh+H0WlPp5y4Nv2sF8DJS1LcZfoMdq3ryhyaaAxkAhvyXYha1jLDC1vAEY81wtapq5ppGUVBE6aplPK1o/U+i4is2nUO5tFY3LdY+o1mubpVCSHHMsg/02/37Kx9L0ql0Wgjo6VgYxouT1cepK53B/C0fD1Dd/3lTJ5pZCMud/bsu3IV9vxvHjFX+vieT5E5bfwiU7r5w/xATOfxNSQg3EdPf6uP9l9HyG4tZfMHxtqDPx7UsBuIo42W+V/3Xqn/AJeWPavJI/LcZWuRhbjiA4hImYAbtGOywmG0FjA/dMieTfKUQQL7W7r0Ts4B90HX0/XK/S5BJSVc0LuoY7B9xspno3xaqorR6nSsqG7c8fld9Niq6J6rFzdJiJF86Zxfo+sW+z1TGyH/AE5fK7/ldcuvk7L5zZK7oSF3dI421jSbMiqnPiH+nJ5m/wDC5mn6Xa7HEEoDhQjTPidR1DQzUKd0D/64zzNPy3Ck9FrNDqTb0tVFLfo12fpuuJjSuDV6nSadF4tVUMiHqcn2CiuqfEdjAY9Oguf/AMkn7BQSeqmqZDJNK+Rx3c43KUM5SKm3R1HW6/Vnl1XUyPHRt7NHyWiQUO5RC91R62xWbLLWXWXCx9lQvlBvcXCUyOWIkwSEDq07FPbZ5IG4TOQNGFdIwXvLACQD1stdydbB6pThlJIbFIfOD2V7cDebR6WVo8rowqHpj5wFfPwyIk4Vp72u0vb9Hf8AK2wssiYUp5TY+66FXxHT6LC0SfeTvbeOFpsXepPQJdLTtMkfiWBd+Fv9Xr7LV1fhnx5XVLmXm/qG5C2iN+2W3Ni4r1yr1Nhqnj7M/wAopo2eQD9SVK/DikZyPY6neRcXvb5g5H5qLUvjaXUxTtYXeGb27rqatxRHWthkc0wvj2F/yWebDXJOphrizXx91l7+FVeoVb6Zh5Gx/wDkkOzQf1PZdfT+Hqaiop46RjmyTNcx9S43kf8AMbD0C39Egeyhiaxpklf53O911m00j22kcGjsFlh8amKd/Wubyb5evivNL431ThGs/h+tPdV0APK15N5Ix3B6j0Ksimq6fUKeOqpZWywSt5mPacEKF8Z8Ks1CMvgbyvYMuPUqKcIVvEHBM0r5Kaas0iR15I27xn+pv9uq9dqxbuHliZjqVuP3K+TfifUfaePNXffDZuQfIWX1Np+tUGsUX22gqGzRWzbBYezh0K+QeI6z7dxHqlVv4lTIf/6Kxt6aV9ua8Ai/VJeLprgCgdi/ULKWhHhgkdbbIg0Xw2xWSLZC8wl1+6ivEYWBthE6wdYLGw7FB69mheuAMIepvZZH5Kgg5MjnfC8Oa9zSNiDZLtfphYcMINEC6yG5svAWKNgye6ziHTzW90XLbKyfRevi3qroDss4PVeP5rB7oFgclR6OC2CFrTnlDX22K2mnmaD0VhJDy2BSXNG6c7CU4dQpI9BbnV9/A+mOoaTVtuPuJhYHYcw3/JUFGLSBXn/h7qyKzU6S+HQskt7G37rTFOpcXjcLUq6I08scrbki1ydyu3GxlTA11r4yk1UPisPsi0uQgchW22emjqGlRgmRrQoDx1AxmnvLA1sgsWuAsQQValTFzscq747pAaM42XdJczCUfDXiWo4n4bEtUWtmppPAkDByg2AsfopOX3dyMPqT2UK+GmmS6Vw80OaWyVjzO4dhazfyF/mply+Ews/mOSVxPtYIrPvwIgPKd0+Ojjig5ORpbbayxBHzOLiFtyYYpM/HUQr/AIx02LQdOq9Z0q9HVxtJJj/DILbObsQvlsOMkkkjslzi4/VfUXxbrW0nB1c4usXNIC+XYsi9sd1zeXVIYfshbkI3i5v0S79lm7A8dl6LP1XnXyvRC1z6KDxzuFi3fPdG0cx3Xi0BUCWgm6y0LFub5JgHskAcbC9l52xAFyjd+HCA83ZBogfVE3I2WI/MBjKbYg4C4iFYI91jcXHRHboUPKRsDlVWCSLLwPdeAPXuvHBwEAyN52OHdFSyc0Ixc7Fe5cYQU/3cz2dD5h81A52dglOwtl47bJD+vZWUJbh4KtL4I6l9j4wgZezaiGSI59Lj9FVo/F7qYfD2vGn8UaXM78LahoPscfurjntLen1pGPEYbdlrQMcyovsFsUJu0g2ysubyy36Ldk2XDniJG6hdVRDXdZbQvzFGeeX/ANo6fNS+R5iYS3suPwdTNqKzVK53+pUCJvoGi5/MpE6SY272n0Ap7PJxawHYI5TzvdbuunVUzYqdzg/LQMErk0w8V7z0C5rbfazGumxE2zAsSu8pR3C1532Y7uqqo/j9qHhcNCEG3iPA/NUDGDyY7K4f8QlbzR0dKDu+6qMMvGOi5t7WvopzbJbxaxtZOcLHKQ84XMui3G4ARW+79ylg+YWynyMw1vZSFAzGbo2gk5QWvYCycN9kA8ljcWsmsb5b4WOXI6+ibcOz6LpCXZF0q1z6JzgQMoGEkgAKD//Z";

const team = [
  {
    name: "John Brinegar",
    role: "Co-Founder & CEO",
    bio: "John is a seasoned software and solutions leader with over 30 years of experience spanning AI, IoT, analytics, and enterprise systems. He is a co-founder of GPTWorks, where he leads generative AI services focused on fine-tuning and retrieval-augmented solutions using open-source large language models. Previously, he led IoT solution architecture for the industrial sector at Hitachi Vantara, delivering large-scale analytics and IIoT platforms. John has architected and launched complex solutions across manufacturing, telecommunications, healthcare, and industrial domains. He has led global teams through the full lifecycle of architecture, development, launch, and delivery of production-grade platforms. His expertise spans industrial analytics, network and systems management, cloud and hybrid architectures, and secure enterprise applications. He is passionate about applying AI and IoT in practical ways that improve efficiency, quality, and operational outcomes.",
    image: null, // TODO: replace with imported headshot when provided.
  },
  {
    name: "Naveed Gilani",
    role: "Co-Founder & Head of Product",
    bio: "Naveed is a strategic technology leader with over 25 years of experience building and scaling complex platforms across enterprise and startup environments. His work sits at the intersection of AI, product strategy, and execution—turning ambitious ideas into secure, market-ready systems. He has led global product and engineering teams, launched cloud and AI-driven platforms, and delivered large-scale digital transformation. More recently, he founded and built Promptly, an AI platform enabling multi-model interaction and real-time collaboration at scale. His current focus is applied AI, including generative AI and retrieval-augmented systems that solve real operational problems. He values clarity, outcomes, and building technology that people can trust and use. Auxilio reflects this philosophy: pragmatic, thoughtful, and built for impact.",
    image: naveedHeadshotDataUri,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              We build technology that matters
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Auxilio is a technology company focused on building AI-native platforms that transform how people and organizations operate to create value and optimize their life and work.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Auxilio was founded on a simple observation: the next generation of transformative technology won't come from point solutions or incremental improvements. It will come from platforms that fundamentally reimagine how intelligence flows through organizations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're a team of engineers, designers, and strategists who have spent careers building technology at scale. We've seen what works, what doesn't, and what's possible when you combine deep technical expertise with clear thinking about human needs.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're building the infrastructure for the AI-native era—platforms that don't just use AI, but are designed from the ground up to orchestrate intelligence in service of human goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                The people behind Auxilio
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {team.map((member) => (
                <div key={member.name} className="flex gap-6 p-6 bg-card rounded-2xl border border-border">
                  <div className="flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} headshot`}
                        className="w-24 h-24 rounded-xl object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Bio */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Let's build something together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always interested in conversations with people who think seriously about technology.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
