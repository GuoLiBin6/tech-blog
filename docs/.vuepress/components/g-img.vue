<template>
  <div :align="align">
    <img :class="{'g-img': true, 'error': showError }" v-bind="binds" :src="imgUrl" @error="handleImgError">
  </div>
</template>

<script>
export default {
  name: 'Img',
  props: {
    src: String,
    name: String,
    h: {
      type: String,
      default: "250",
    },
    w: String,
    align: {
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      showError: false,
      baseUrl: '',
    }
  },
  computed: {
    binds () {
      const ret = {}
      if (this.h) ret.height = this.h
      if (this.w) ret.width = this.w
      return ret
    },
    imgUrl () {
      return this.src ? this.src : (this.baseUrl ? this.baseUrl + this.name : '')
    }
  },
  created () {
    try {
      this.baseUrl = window.location.href.includes('localhost') ? 'http://127.0.0.1:8090/tech-blog/' : 'https://gcore.jsdelivr.net/gh/GuoLiBin6/images/tech-blog/'
    } catch(err) {
    }
  },
  methods: {
    handleImgError (error) {
      this.showError = true
    }
  }
}
</script>

<style scoped>
.g-img {
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(125, 125, 125, 0.1);
  border: solid 1px #eee;
}
.g-img.error {
  display: inline-block;
  transform: scale(1);
  content: '';
  color: transparent;
  width: 150px;
  height: 150px;
}
.g-img.error::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: #f5f5f5 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADICAYAAAAKoE9MAAAAAXNSR0IArs4c6QAAIABJREFUeF7tXYu1FDfSLt0EjCP4IQJDBIuGAGxHYByBcQTGERgisB2BIQBGEMFCBHuJwJcErv5TPepGo5Far1K3errmHM7u8VXrUSp9qrcE8G9TFFBKPdBafzdOWgjxEADw3/DTAE+tBT0AgMcC4Gcp5V+bWihPdlUKiFVH3/HgSqnHWutvrAM+Heh7gIfCOux4uAEAD3nRTwB8K6W8K/p45iOl1A8a4JdpDQAfAcA3zp3WGv928RNCfGoxN+q17q0/BobKHT8ej/8J3d73p9t6PNDD7V05XMnnbw9S/lDyYeybo1IKziWU2Cc5f78FAPx3CSYA7wMd3WqtL74RQnyRUnqBKWdCe2rLwAAASqmHWuv/893eeFPr8wNddXsvzVyt1Ail1FMNgMCw9Z9XytEAdzcnCejiZ6SfC8lICPFZSukFs60R6aqAYQO39+L80UqNOCr1BgC+X3xB2x1wknIEwHut9fvD4fCh1+V0CwyjkU0IcWZM2/LtvQITfDpISa6+DBIWwP9WWM/VDSkAXkkpf+1tYV0BAxrkAOAnY1knZ+jeiN96Phrg12dSvqIe56gUejh+ou53x/19NCpfN3aQboBBKfWLBiBn4h0zGwiAR9Q67yDJAfy7Z7o2WvudAPhRShkyrDYa1t/t6sCAjHYP8IcAeL7oyq9/sCZqxDulXgqA366ffKus8FYAPOnBfbs6MLxT6h8B0MSdtsrWdjJoQzUCpYXimIpOyNPtNDTA62dSvlh7gqsCwxW5vNbex4vxG6kRzzXAn90t9som1GLvckm0GjAYXfW/djhv7uS5fZACTdSIo1LoiZjCr5n+bSjQStrLme2awMC3T85OZbRtwVgm/PmfjGlw00IK9KBOrAYMbMQq5JqEz1pEOzYOf05Y1a6afDhIacfvLL741YDhqBS6ZaY8g8VXft0Dvj9IKSmXeFQKfexTVidl39zXJQUOUq52NnE2qw3O+mrb4yAAJKVP/J1Sr4SVSdl29rvvfdcSAyahTGnHu2cFegKQZlUOaeIAaCzmX3sK7BoYWJVozGDUbq+jUpg5OGWhNp7+nrtnYNjz7i+w9r8PUpJFlLI6scCOnYZgYFiM1DsdiDLtmtWJxZhov8DAt88yTKYBfn8m5Uuq0VidoKLkbD+7BgZOxlmExwCz9jDLkqTmIwN6+03jACfO0mvPZSefNFmVaFYn2m8ZtZRXMuPV4hg48rFku4q/uT1I+aj4a+dDVieoKOnvZ9fAwJmVbZnL7Z1SamB1ou3eMTBcR5XhtlxC1/vHg5RPKLpjdYKCiuE+GBgYGNpymNM7ZZg0qxPttm7vwMCVhtvxVqhnsuQqVifabR6l2lc6y9WMjzjho1K6dOL8XRkFqMKkWZ0oo3/KV5SSXcp4vjYMDKWU2+53ZGHSrE60YQIGBpYY2nBWpFcqqYHViTbbx8DAxT/acFakVyrjFqsTbbaPgYGrOLXhrHivZGHSC6oTnwBgDOvG/8US9liY9urSwBkYGBjiR7hRC6qCsY3Vib/xAVgAeDOX62EK1eLbJPhv88V/GBj4xeRGxz6pW5Iw6UbqBALCy9zn9cyTBPjM4abf1Vy73iNyz6peCc6XSDrAzRpR+csJ1Ykv+FShlPJNzaJNuD0+vLtJNYOBgd9BrOH/6m+p0nuJ1IlPBhRIXnw20gOqIZurbM3AwMBQfbhrOqByWxKoEygpPM5VHWJr3yo47B4YlFL8GlWMu9v9naxKUGWmLILCUykliaTgkksphaH32PdmjJIMDEo91ZxI1e7oz/RMZV/AIY5KYVn5xyULofKOzI1dCVwly6r6hoGBgaGKgSo+/nKQkuQp+0qpr8njuz66HJVCY+QWvBWL0WSOf1b1SmwNySsOYlefUhkdjbRQ/AL2kv56o1LgXHv/kal4NQtdFRgMY3GGZc0OFnwrAJ5Q6PSV0sLng5QYubjY77iNuBkGBgaGxc6EPRCJqGos/mhbKDrclFJLKhXfKfVCAPyR2n6ldgwMDAzLsx6V0bE2OG1JNWKk8kbUCQYGAwz8uO1y+ICuwYe1b0wYaQH19WIDJpU6k0u6DRQHYmAwwMCP2+Zyd3l7kiIttdICTn8tl9xRqd4vItJXyktZpQfjIwND6e5lfkdxS1NICysDQ9f8RlUrI5M1LpozMNRScDvfkxgdifIi1pQYioOxlthqBgZDZSpGW2LTtjwGhdGR0ni3oirRtXucgeErMPDjtu0Rh8ToSBk9uJJX4oEG+Lc9uctHYGBgYCjnnvwvq42OlNICTn+JHAmXTKbS0z/55FvuCwYGBobFuI3C6EgpLZiFL259b7AG8j1kYDAk5XwJct5yO6w2OrbaIwHwbW1MRQ71jkqhGlEce5EzVmnbNVQs31xX90q0YrrSjbm27yiMjkelFAA8pabNkrdjZV4H9dKD/TEwsMSwBLNVGx0bAzdZGfs5YlLFXiyxYQwMX4GBH7dtx3HVRsdW0oK1ZLKHdkNk3JJLnIHB2sUNxK+3O7oNe641Oi5lxW+ZabkVFWJkAwYGBoaGkDB0XW10PCpVXIQld3EC4IWU8nXudxEVYnM1RRkYGBgoz8BFX7VGxzVuWg3w1zMpf6YgjFLqFw2Aj89s6kdVubt20at7JXABR37ctnYffcBQ5QpcUlpwJv9eAPxaWmEKA7HuAf4Qp+fqNvdbK1TcJVQvwNB1xtvmuAugyui4hrTg0hilhxuA16kAgZ4HAEAp4eUG92uaMgPDuSrBwEDIzTV6aoeuvVsBgE/WfdRa3wohPiOptNbD83NCCHyCAKWDovL1hGQn6YqBgYGBhJE8nVQVWaUowtJqYXvol4HB2mVmRi/Lv8UXlG4Abu8BHhudOfpIa01yUofSwh6w4GyNDAwMDCGm9z7ZZg4tPpry/dxpqYkJWCpuYXenPX3BZA8BpQ/pb9mF8ZElhmlzoo+7JmQI3h2k/LaEMahTq0vmsPNvuigEO9huetiIHqzgHdAh+XHXGDgIgB+llGiwy/6x6zibZJQfMDDY1GycqEO5cc36yj3MEXAornWwpbyCZpuxXscMDAwMXylQGqU4Bw6lEXRsZ1gPFQCAgYGB4USBGmMhfn9UyhsDUuqdMEbOrusirnp02w7OwOAAQ/dFOhvxQ1WEIs7JHGQEh++cOd4epHxUMu8Q2JT0xd9kUYCBwSXXDlOvq7MfRxqGwKE0ApK9RFmHmaxxrfRINpFevBJGJO663j8l0TElWgA8pax3GACHIomEjcHEu53Y3ZKl7mJT6sJdaYCh9zcFY7RM/XuyWzK1wznJobTg6gbeeMwlT/ftGRg8W7QTvbYZKITAocLjgXEQs1GW3Z+0jU2QgWGnwFB6SHP520QwfgSAbzAr8SDlk9w+3in1QgD8kfsdty+nAAPDDoFhKVCwJIfHGgC9Fd+U1H5USuH3+AAs/xaiAAODHxgwQeinhfZg6WGKjIC1kzSH+70pmfYit7+jUrcAEM3ozO2X2/spsPTlMbcP3Rgfr9hFtgooOJLDm4OUD3MPZCwnI7c/bj9PgVL3cgu6MjC0oOrXPsndkiXTRckBAB7mJlZxclsJtcu/YWDw0O4KJYYuQKGcTYeoSn4MqIaAmd8yMHgIdmVBNc3dkpk8V9yc7QzFpMv+kIHhyoGhxAuQzUULfcBp2AsR+hSGLKWU6Ela/deNjeFaJIaeLMsU3MVp2BRUTOuDgcEvMWzeb16a6pzGNuu06jgN+5M+lZXH34PUYrnrUDFt1F4KweJsu5EYcDIbz7Bc1S2ZxnplrTor9/YFH5V5JuXF83NbV3sYGAL8uWFgKC6lVnZUl/2qI3UiatTdsouVgeG6gGHzbskUmOkg2CkKCuM6tur6ZmAIAwMm/riViFL4dq02nwXAY8q6CmstJDbuTKWo2KcUf0fwfZ76jqVRSzcXYs/AEAaGLb1hmXyDUZyMHvoYcy9M1uZSUyqWyDqQcrJoxMBwBcDQk2spi/sqGy9sbygGhXGZR6W2UleCrNRf5RYPn/fmldiExHBtsQq5jLSQ9f+tUR+wslfxb2UVKGfe3RSC7Q4YtmA06ilnPofrqNs2dmGSun43Ag4MDCEm3QAwkDIs9WFdsj9z2LBeA1aJovw1ofEGwIGBYaPA0NXGUZ7E0r6ow9hbS2NOybvSZbf6riv+6srG0HFwSrURrBU3rd0vlZS3lN1mJc9KyjYxMISoRH0DpexGQht0S2KRkyojWMI4m21Sa/lfChRGAncKDl1Fz/YmMTzVAKqjE7K7WIUS2hv9HYPTcutDIn0xcGlMhioZvuib3i6h1mpULpEYGGYottdYhVwmwvYFVaVXB92eVFcGhhmu6ynFd2nxtuQw9vZNxkFbHRQsteK5BvhzbVoyMER2oIcMy54eF12bYXPHTwhDzs57yJ1DbvseHtdhYOgfGJr40XOZdavtI/EC3Xp3EgCt6ZYwMMSBYc3HbbuKV2/KiQ07D1j9uwWFkRRrggMDQxwY1sqX6J5xG55l8q6dZCuSvAfySXo6XAscejN0d+WVwH1a6dVrNIZhXQUM8eUfEQVMstWDg5TPibps3s1aodMMDP1JDN1YyJtzPQ+QRIE1wIGBIQ4Mi1beEQA/rhFgk8Sh3Gg1CiwNDgwMka2mir1P4SiOVUih0n7bLJl0xcDQCTBwrMJ+D3zOypfKq2Bg6AMYOFYh53TsvO0S4CAAHvVk/O7OK7FAcgu7JXd+0EuWX5ALkjVMT4VgceJ7AwYGhSx25cY2BTJyQbIJx8AQIVlDiYHdktnsyh+4FGgFDgwMcWBo8bgtgwKfcTIKtAAHBoaE7aHOsGS3ZALRuUkWBahDpxkYEshPCQwMCgkE5yZFFKgtaWcN+uUg5YOiSTT6qDvjI66TEBi6qqPXaA+525UoQFhCv6tCsF16JQwwUDxuy0VcVzowexqWSKVgYEhhGqIMSw5iSiE2t6miAFEIPwNDyi5QAENvhS9S1s1ttkcBBoYF94wIGF4/k/LFgtNedagh4UfrqXy7EOIpTkhK+XtsYhjVJ6VE9Y1/mRQ4KvVfAHic+ZnbnCWGFAISofDtQcpHKeP10mYwZmn93TgfIcRDAMB/w08DDIfd/NCKHWPIzwcpp+9960yozI3Fay4K2GiAuxsAL5horfG/XzzQI4T43FM+QO2+E8YzMDCkbAYRMOBB+uuZlD+njEnZZoir13p67HW8vXGMe4CH+LKVNR4e7lauqqidhZC5a0iIIOIFGXH6775XwG611t6KW4fD4UPNZFK+NbkT+DhS9d71mOnbpbuSChjMLfvrMylfpWy23abB7Z07her2GiC69qNSyNy2JFI9bscdeEEmIv1gDdLph1LcPcBTfEGLap092sO6BIYGt9itBngvtH4jhJjE74Vvbyo+Su5HADyZsx2YQiT/S+6QGzahAANDIlkbJlIlzuAqmkWj6Xp4aOUqKF25CAaGRAIyMCQSar5Z1KBFZFEnmeyeO2FgSNx9BoZEQs00izEbqxH1NKbqIbZXVOPk9NOrjeGBBvg3ZyHc9pwCsRqClAZepn0dBXpM9OsSGJDMhIlUdbu20a8FwLdSSp+bb1jRUSk0Os7GOGx06ZubdgzE11gQA8MaVG8/5uwbnK3rF7Zf3nWNwMCQsZ8sMWQQ67LpbGATeyOqaEv+MQNDBkkp8iUyhru2pnemHLlXlWDDY1/bzcCQsR8MDBnE8jSNhdkSVh+qmyh/jaXapZTyLMJybbL0bGNAQv1nbQJtefy5R0zYJdzPzsYiVNeYac/AsOjjtmsQf4ExZ20NR6UwCWlK1V5gPjzEJQWiEaprEK1bYGA/Ow07zImpbISkoXFlL13WJe0WGFjUrWS3r5+/P0gpfb0RFjMlm+zeOuox6hH3oFtgwMmxy5LmmAiAH6WUb3y9ERUzpZnoDnvp0b6wBWBgAyTNYQlWs2LXJQ2BS3rpVVroHhg4Qq+E3YZvPtvl2DTAxxuAV6GyauwaLqZzzYfR7Neazmu/7VqVwMU1KNpSS7Mlv7dLlN3hAR8HN/UWpwAmCj84Sg+h/AmsWuRbuClT58u5wJJnU/3KJYm2gbE+CwAswBvMZVl7Dd0Dg7E1bNl16d7ediCLW1D19pqKpYaYGyXBQK3EB/eBArd4kELfbAmAMPDsBuBlz6DQvSphM1YH7kv79sZScVMhUuf2vuNS7Gvfd6fxCwEoVP8SpaLSmI8vgKUFT4CwiTL9m5AYRjYzhjKUHkojInNu74+9o3ofx49nga71GSpsko82BQwWQAxvKhix86x8N9/efFCZAvUU2CQw1C+be2AKMAXmKMDAwPzBFGAKXFCAgYGZginAFGBgYB5gCjAF4hRgiSFOI27BFNgdBRgYdrflvGCmQJwCDAxxGnELpsDuKMDAsLst5wUzBeIUYGCI04hbMAV2RwEGht1tOS+YKRCnAANDnEbcgimwOwowMOxuy3nBTIE4BRgYTrUl1UgqAfC3lBIzOJv+TAGan8ZBQgVbm06isvN3Sr0SphhLDt1KvyudLqZfp6Q72zVGe3wEJmf9Qyay1t8JIT6UZAlfBTA4B/vXFCawiWwzxFJ1+Nz6EgcpN7cXdkm4HLrNfaeU+u0e4OEzKX/OOQihtqYS9r/m7x8FwO8zhXG1dUF09zpUDj0c/souUS86rMScXQuvFukZGHJY7mtbSmAwB/i/Y2k5DfDXDQCCfFX5M7c0oAD4OSQR1vJRLhVtySn3W2w/J2XaTxDmgPYEjAwM52XqS4hYsqm9SwzDQdV6vmajEK+wLgauHw+y0DqoggkhPo2HPAQonvqeeMPjzV0MDu4bnQLg21B/SwNDbRHeOSnzqBRKSUOtkhK1iCUG5/0KBoYTzFE/+GMzZ0SVeK4BEHC+MYAbfDAnBsiOGoHNZ0XqawEGt7p6iZp6BgwlyBLbnJS/O7fnHlWJzwcpfZWWg+RLutFniH84HOwalhct1wIGHyihNFJic8hRI3DcNYEBz17KWTGgOUhyoQPvPD2YfZ4GKaOUGGjw0wBY5RhfOHpbI+4xMED25tUe3Ngtglbte4Dnc8wqTn8fC6R+0ADBp9xvAP4aK2Cn2CbcdzVLLq2jUmizGFQdAIg+Hlt6FlIOtK+NTYfYfozfp3zj2Bd+fSYlSmBZvyJgeKfUn4YpBoLj2wIMDFl0h1owbA0MKatJOeCxAzGnuo3P55Wody59NMAbofX8ARFiAjYB8EJrXVTROSaN5Rxyl34xYHDVp9In8LKBwSOeBd9FTGEubFN7SGqRvqVXYsbybD/ugsa1KBOKk5V+aLcHYDDrTIpB8Byg1d4iqb39jY3gD1yTBvj0TMoXqWBC8UATSmdZwOBhxjtxMhTl/F670sU1A0Ot5dkmrC1OO3sRVUVaeEFKJQZ7LiXSQIzZ1n6PkwAYnmqAMejubG9jEoPrhYnRyvf3LGAwKIaTPSvXXjAwgglKGZPYxsCQRsUlgMGNyIzMzH4dCh/gmR7hiXxnS0s536HrLRrA9k6pfwTAD2lUpW+1FjAYNeJ/tWc0GRgMKPwTetcwk7R/H6Q8M2pRAoMJjEll0GHqGuCltQZ8MShoRPOtVUr5e4gGeNAwks/9uzi9BTk+nPMZ5x1A79/G/74EMHTw4tcsO8WMkB6p9gO+AJXCo9Ytjc3/FoE9ifWV+o5o6PafkwbnJAbHYBv1dNl9CYBH9vOIUVVCKfWLcZFM9Ihtjk04x1D56SDlaCWemlECQ2zTWvw99Yawx3Ysx69tPdJp5w3TbaVKbB0YTHj89DJUDq+2tDX5+I4aGI5KobQwXEIaIOqNsNu7PBwEBhRL7gHQ++ATyVAdQJEuGOlmxBpUPUYgCL7wu1NgQKlkkBhCerarKy8hMcSA08wJXdXvhdZvSpJ0avc7NEfXxYm3viudzq1vy8CglPpBA6BUP/zmIjzHNtZ6Ly5sLzAEVIe3AzMADNZSM7g37twwD05y8iGj6BxKbqpllLXDugslhhRgsI1QZ5vdSmKIAYMnviAYYpx4gD8epHwSGzf2dzfaz/DnmXgc62PLwOBISlFAdPjnIiLUCwxHpdAlNsXJ49Pdo6jrukPQP3xzSkwZ4tmN6oE63Wik/IRSx9zz7pTAkCM6xhil5d9TLPquvmwD0FrAYIufuTfySM+5ddk0RyOieYsUA+iC7lw3AStVlHb3t9btncsvVKqEx64Szaa0Ad4nsYYkhgcmiu0hBjK5aapGbEE1YoxnR9XipT6pHfbLv2jAeRELftopMERTfHsDBnc+pSCcAgyuBOAax+xDaPgR3eZTFOZByrkXqC/OsCcwqHnaNRUwOGCdpEqY+JpfQpL/rI0Bb/3QTW/UBQyH9mbgzaW3urvCwDBkEF54QtYChsSgLNzGLO8NfoCpwh7byYU6YjMuQFrIuOGj50ZtzfJMUYFejtRAAQwhY3Hs/DkeiSeuRBb1SoQWejwev9dC/GCFRttNb03gE1ZDiqbMMjDAxcYYtQwzDf8cCbuUKkEZlOXyz7iGmNhu34IxJs85jKG2WwWGo1IIgKOk9Nn6/7FM0jEt25tDkgUMiPQA8JM+Jc+4vnl7UhP9TZ7+m8Ph8HbGGPVSAIz++mgUnyNGPtYAmCwzilDNRcBaRkwRpXGMOcBsaWNYGxg8akS2gTN3j9ybN8WqnzuGx6YxGaBTQd+VMiw+wJwlPAtoixlU/NAaHInNCyBRYMBNQrfaPcDTgOsSA0gwc+4vk5H3wkgRo/1hpAdKEW+01u9dF1eNxLAG0tcyhONaCmb9rQUM7vrciDqKG9w2cLv9OWpE1JDWEshq93pODaJQJcYLBADuMIsyZjsw7fGMjrkY3niHC2AwYa02EIRCoN+iuhDQjTEGAnU9TP4YxRyXxlidBxHz73sAVElKJQbXpde9xJAKhL0AQ2y+WKdx3Ny5KFCbAea8Mo4aEU3S2zswOBL0Qw2AgU748xa5sdPRQwbkC2DQp8P8fQApvwCmrwK8nHM/OhNFPRktxOixcKWIIWX7HgARjAQYCBDe20VJrMKM6oTVlQeL8JzLb0w7Nu3OVKyWqoSzf+ihmuLvfYxk2wtS6eSsbZIKHHd4tIYCzvWagcEOFXDXGqK1I42dXZSOmhakr09i+KhPyTDjIf6ErktTaGNM+UVUwui3jzenWx9LVEfThnFSRjpAkPhuZLLYjTR32JcK4U1l+BRgSolhcJnAZZClgCFFrC8BBidQagpyKomTMOpucXKfUZMnqcfawyHhL2VPZ9rchc5GiirhxhjEsitxHg64nkkNzn4GA6G8NgbcNBwAqzP5JAM3Ht0Q5c4Uw5g1NPoIuENgsGMYgqJypDZiMDU3gcbBsmCOtGCH2QYL8pQAg88A66n1kRW5WHqAHenlrBsKe0poXqFDPhd8lAgMKOVNl7tTb3PKp5gr4hI1PvoWZW5+NEaiiuBTOxBpMQAK3ZVRSaIGGJz882CWYi7TONmPSQcpZYycwJ01gcEcXAxrL76JXXq4UpfjsnxkYv3HMPpoWG8KvWNtfAVj0ZCH3jfzLUnItm8eM8AweelcYEoBBhzLOVOD1OAYvWezL4uAwV0kMpFREdCNeWZHcEXghNssy11pG1JSxooxyvj3FoVNPGLerA7txO6fWY9bqxItip14gGEKvUeR2bIzoattFWkBDyIa7SwDHs4l+BZFKj/lAIN92bk2nVRgMIBnSw0/msjkAfBiBXJIgMERP9HYiACBmYNJ9SArJQZbLCfbwFbAEDK6BRgnGDbdGhiMjcPOmfHGqXjmHaw+7YYph0T4GNPWHEaHV89iYABgukWduaEEjEAVDdbLmVvokM+lQ6cCg+cSQpBA6W98a2IWeJOAwQQ2oRX9Fgtk2o+HhAhhvsF6fRg2PfsrBQZPqimZq7IhMCTlzM+lXJtNX8LGgKpi0Hg2bmqJjcGIu5M/3WKQpMskxlOxv3vKApxJBob+U7AQ2s+eSVlriDyblu+QO/t+kQ6dAwwG3O3IyHH8qJqWBAwhYyMWMBWnSKtkwKBUJRwLK5kdwKOjkfTtsS94Q6E9B/9CtF5CYogdrlpg8BW0XUpacAoI4VIuDqF7OaQUP0mlmdnjqTTeGA/kGB6DBXxSx/HROEVNiwKDYWY0JM4/V/Z1pkNpNIxwTC2jXSoxOO8GRCPkUonZChicdc4af1wLvaufXwMwmBttUpfmVE+kB9Ur5B5QGMKJXQ+cq6fjfFvZGyyQnd7CGO0LRvr+Xkr5OoeHrT4nKRUvceONmFWLosBgT8T4izEg6bGx2mO+RCiycfwUgQLViWCsQwkweG5fMvtCK2DI8dE7NLkwUvYMDOYJ9oEvhBDjrYgutMf2Q6yeUudBcDdvMaKuj/ucndU5MqMHFGYPe6AADCmvjXNz9nS4OIwEgTEWSL9ouTYXOHzrDUVE2t9mAUMIrYxXAsECA5fGAqe+5t6NLwEG13CVIh7loC21jSE3p8Nxw154apYGhsBhB3NJJFdkHiUf34EzN7I3YcqyY2R5raxD5y1VmHLYfG81mDojRTd4iA9tlX2cl4dvguqn2+/cGxOxZ/9IgMGRKtDqie7LMelqkihCARW5wOApk13ELHNAQQ0Mjp0mpYKvLf5dGIschvkIWk+PkvjWpYXA3JWpOnfkpeTxTQO7PHwOrgbb4rhzZc5DoroFDFHDmeeAoKEWk4bcQsTJfXnqSaLL76x6WQ2BnP7PDLAOLyapAq5hHmOKzPzG+IzhhfLQm6DkwODZFFQ3ECgehN7QywUGj7RA5o2wRE47FbzK+OiifszA5t6mvlvNZ1TKYcwIMPgs2andD+5Kk/6Leiy+bzoEuY0qgGMbwj99smxYF65Be60x2nkuqd9M/s/Z/EtsBQH3Ks4Xq5SNBy+VTlM7980W337b+Q8xD4nnDRgsr4g1V+/cNYRif5oDQwqVcoDBI4KSSws4Z0qJwZEWou4498EUn6TVGBimOgFm/zB5bjjc48O1N6eQ26FKkv0ewxwOk9KQAAACuElEQVTgmMrjf9iSCx4CDL23A4o8eSFTwRrzWNGsCxzHAQB89gClKDdyE+mPNUiL7BSuJ8zi71uU2ubqjvjOQqr063Gfeu0NRlLA4j52zdUBFMbxPeBwIfmcAUPKIV6gTfCgB3zP5NICJTB4iuf+/kzK4QEUFB9vTsbbadM8OrtX7WgJDFZS0m1KFm1KHINv7+zMUg+zTmKuDayR2o9jISEfICDJsVQAejeqApUinjoU9cd0gNnycoFq6hfeEUuKteM+UFJBe8MwRuC5BwRBb3V2t+Az8qCRogbQ3RQweCysTaQFKmAwG4/upxG9z6SFlMM98+bEWR2KWPYnpQTkXg4xYPAcgOGQHqScjJYGOFAqsb1ceICR8ae3SdBS71FXf7Kydn13F75pguJ+NNgu5+JLyOydao64OUOemz14iO05OSnmYw4E8gJKCTZtZvsz9EYAO8t1Gu0mmwEGj085KpLnbLLbluIgebIFL9xckTcxgsax1PJw1m1DZjPJAQYPOOLn3urh5iZGEd+t2zEMGbC1jBXNfXE2CAhYOyT4MFINj5ibGsOqsUJ1yBt3cUA9gJIECma8qRALXhpov7EfmjHrSZaMjNETJVib5h82ZWOwGae0dHkqI1AAg9lIRHO8qRDdL9x6Rmc9s5aPdS7mbritAINH+pr1BJg99h20ORXTzXmYyg2m7ndtO1PWcCyObL/JcmELMJccAiC2i7674rm0UAX9aBlzEfjQ2/AF32ENGflDa3Qqvg8X7qaAYURodIXmLj53481tb7v3st4psMczOjvq61W6rdMnqicToJQa03Lp4mtvxNvhT6H3HBAATV3CpAdmx9gYVMPMIZhVA0wNkYc3p3KDWaXjKWjg7A0GASJIYEDX2QPOYztTuuD5zUmiqeKLUS0w0lG0zEFovXgZYuEl5KX/B4rY4CCCz/tTAAAAAElFTkSuQmCC) no-repeat center / 50% 50%;
}
.g-img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0; bottom: 0;
  width: 100%;
  line-height: 2;
  background-color: rgba(0,0,0,.5);
  color: white;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
