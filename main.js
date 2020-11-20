(function(){
    const startBtn = document.getElementById("start-btn");
    const modal = document.getElementById("modal");
    const start = document.getElementById("start-screen");
    const close = document.getElementById("close");

    

    startBtn.addEventListener("click", function() {
        modal.style.maxHeight= "100vh";
        modal.style.visibility = "visible";
        start.style.maxHeight = "0";
        start.style.visibility = "hidden";
        close.style.display = "flex";
    });

    close.addEventListener("click", function() {
        // start.style.display = "flex";
        start.style.maxHeight = "100vh";
        start.style.visibility = "visible";
        modal.style.maxHeight= "0";
        close.style.display = "none";
    });

    const slideContent = [
        {
            title: "future focus",
            postive: ["see ahead", "know our priorites", "are focused", "have a global mindset"],
            negative: ["don't see the big picture", "don't consider the broad implications", "lack planning", "push for big ideas"]
        },
        {
            title: "ownership",
            postive: ["see ahead", "know our priorites", "are focused", "have a global mindset"],
            negative: ["don't see the big picture", "don't consider the broad implications", "lack planning", "push for big ideas"]
        },
        {
            title: "develops self & others",
            postive: ["see ahead", "know our priorites", "are focused", "have a global mindset"],
            negative: ["don't see the big picture", "don't consider the broad implications", "lack planning", "push for big ideas"]
        },
        {
            title: "courageous",
            postive: ["see ahead", "know our priorites", "are focused", "have a global mindset"],
            negative: ["don't see the big picture", "don't consider the broad implications", "lack planning", "push for big ideas"]
        }
    ];

    //Footer Buttons
    const positive = document.getElementById("positive");
    const neutral = document.getElementById("neutral");
    const negative = document.getElementById("negative");
    
    const values = {
        future_focus: ["leaders", undefined],
        ownership: ["leaders", undefined],
        growth: ["leaders", undefined],
        courageous: ["leaders", undefined],
        self_aware: ["team-players", undefined],
        builds_networks: ["team-players", undefined],
        drives_for_results: ["team-players", undefined],
        engages_others: ["team-players", undefined],
        creative: ["innovative", undefined],
        critical_thinker: ["innovative", undefined],
        relentless_improver: ["innovative", undefined],
        embrace_change: ["innovative", undefined],
        patient_focus: ["customer-obsessed", undefined],
        customer_empathy: ["customer-obsessed", undefined],
        value_creation: ["customer-obsessed", undefined],
        business_acumen: ["customer-obsessed", undefined],
        build_trust: ["inclusive", undefined],
        seek_diverse_views: ["inclusive", undefined],
        respects_others: ["inclusive", undefined],
        communicates_effectively: ["inclusive", undefined]
    }

    function collectRating(e) {
        e.stopPropagation();

        const id = document.getElementsByClassName("active-slide")[0].id;
        let rating = e.target.id || e.target.parentNode.id;
        console.log(e.target, rating);

        values[id][1] = rating;
        console.log(values);

        if(rating === "positive") {
            neutral.classList.remove("selected");
            negative.classList.remove("selected");
            if(e.target.id) {
                e.target.classList.toggle("selected");
            }else {
                e.target.parentNode.classList.toggle("selected");
            }
        }

        else if(rating === "neutral") {
            positive.classList.remove("selected");
            negative.classList.remove("selected");
            if(e.target.id) {
                e.target.classList.toggle("selected");
            }else {
                e.target.parentNode.classList.toggle("selected");
            }

        }

        else if(rating === "negative") {
            neutral.classList.remove("selected");
            positive.classList.remove("selected");
            if(e.target.id) {
                e.target.classList.toggle("selected");
            }else {
                e.target.parentNode.classList.toggle("selected");
            }
        }
    }

    positive.addEventListener("click", collectRating, {capture: true});
    neutral.addEventListener("click", collectRating, {capture: true});
    negative.addEventListener("click", collectRating, {capture: true});

    // Create li arrays
    const positiveLIs = [];
    const neturalLIs = [];
    const negativeLIs = [];

    
    function populateArrays() {
        for(value in values) {
            let valueType = values[value][0];
            let rating = values[value][1];
            let word = value.split("_").join(" ");
            let LI = `<li class=${valueType}>${word}</li>`;
            if(rating === "positive") {
                positiveLIs.push(LI);
            }
            else if(rating === "neutral") {
                neturalLIs.push(LI);
            }
            
            else if(rating === "negative") {
                negativeLIs.push(LI);
            }
        }
        // console.log("hi", positiveLIs, neturalLIs, negativeLIs);
    }

    // Display items on page
    const postiveUL = document.getElementById("positiveUL");
    const neutralUL = document.getElementById("neutralUL");
    const negativeUL = document.getElementById("negativeUL");

    function populateLists() {
        positiveUL.innerHTML = "";
        postiveUL.innerHTML = positiveLIs.join("");
        neutralUL.innerHTML = "";
        neutralUL.innerHTML = neturalLIs.join("");
        negativeUL.innerHTML = "";
        negativeUL.innerHTML = negativeLIs.join("");

    }

     //Pagination
    const slides = document.getElementsByClassName("slide");
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const footer = document.getElementById("footer");
    const restart = document.getElementById("restart");

    let currentSlide = 0;

    

    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
            previousBtn.style.visibility = "hidden";
        }
        else{
            previousBtn.style.visibility = "visible";
        }
        if(currentSlide === slides.length-1){
            nextBtn.style.visibility = "hidden";
            console.log( nextBtn.firstChild.src);
            previousBtn.style.visibility = "hidden";

            previousBtn.firstChild.src = "assets/restart.svg";
            footer.style.visibility = "hidden";
            modal.style.backgroundColor = "#fff";
            close.style.color = "#696969";

            populateArrays();
            populateLists();
        }
        else{
            nextBtn.style.visibility = "visible";
            footer.style.visibility = "visible";
            close.style.color = "#fff";
            previousBtn.firstElementChild.src = "assets/previous.svg";
            previousBtn.style.color = "#fff";
        }

        if(currentSlide >= 0 && currentSlide <= 3) {
            modal.style.backgroundColor = "#0077c0"
        }
        else if(currentSlide > 3 && currentSlide <= 7) {
            modal.style.backgroundColor = "#4156a6"
        }
        else if(currentSlide > 7 && currentSlide <= 11) {
            modal.style.backgroundColor = "#6f2c91"
        }
        else if(currentSlide > 11 && currentSlide <= 15) {
            modal.style.backgroundColor = "#b72755"
        }
        else if(currentSlide >= 15 && currentSlide <= 19) {
            modal.style.backgroundColor = "#ed1b2f"
        }
        else {
            modal.style.backgroundColor = "#fff";
        }

        console.log(currentSlide);
    }

    function showNextSlide() {
        if(currentSlide < slides.length - 1) {
            positive.classList.remove("selected");
            neutral.classList.remove("selected");
            negative.classList.remove("selected");
            showSlide(currentSlide + 1);
        }
    }

    function showPreviousSlide() {
        if(currentSlide > 0) {
            positive.classList.remove("selected");
            neutral.classList.remove("selected");
            negative.classList.remove("selected");
            showSlide(currentSlide - 1);
        }
    }

    showSlide(currentSlide);
    previousBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);

    restart.addEventListener("click", function(){
        showSlide(0)
    });
    
})();