let slider = document.getElementById('slide-range')
let price = document.getElementById('price')
let views = document.getElementById('pageviews')
let toggle = document.getElementById('toggle-one')

window.onload = () => {
    slider.value = 50

    slider.oninput = function () {
        let vl = (this.value - this.min) / (this.max - this.min) * 100
        this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + vl + '%, #eaeefb ' + vl + '%, #eaeefb 100%'
    }
}

toggle.addEventListener('change', getValues)
slider.addEventListener('change', getValues)

function getValues() {
    let values = [8, 12, 16, 24, 36]
    let viewCount = ['10K', '50K', '100K', '500K', '1M']
    let range = slider.value

    if (toggle.checked == true) {
        for (let i = 0; i < values.length; i++) {
            values[i] = values[i] * 0.75
        }
    } else {
        values = [8, 12, 16, 24, 36]
    }
    
    if (range >= 0 && range <= 20) {
        price.innerHTML = '$' + values[0] + '.00'
        views.innerHTML = viewCount[0]
    } else if(range > 20 && range <= 40) {
        price.innerHTML = '$' + values[1] + '.00'
        views.innerHTML = viewCount[1]
    } else if(range > 40 && range <= 60){
        price.innerHTML = '$' + values[2] + '.00'
        views.innerHTML = viewCount[2]
    } else if(range > 60 && range <= 80){
        price.innerHTML = '$' + values[3] + '.00'
        views.innerHTML = viewCount[3]
    } else {
        price.innerHTML = '$' + values[4] + '.00'
        views.innerHTML = viewCount[4]
    }
}