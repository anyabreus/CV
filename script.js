let anchors = document.querySelectorAll(".navbar ul li a");

for (let i = 0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', function() {
        for (let i = 0; i<anchors.length; i++) {
            if (anchors[i].classList.contains('active')){
                anchors[i].classList.remove('active');
            };
        };
        anchors[i].classList.add('active');
    });
    
    document.addEventListener('scroll', function() {
        if (document.querySelector(anchors[i].hash).offsetTop <= (document.documentElement.scrollTop+10)) {
            for (let i = 0; i<anchors.length; i++) {
                if (anchors[i].classList.contains('active')){
                    anchors[i].classList.remove('active');
                };
            };
            anchors[i].classList.add('active');
        };
    });
};


