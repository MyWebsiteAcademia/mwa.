window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "15px";    
      document.getElementById("button1").style.fontSize = "15px";
      document.getElementById("button2").style.fontSize = "15px";
      
    } else {
      document.getElementById("header").style.fontSize = "25px";
      document.getElementById("button1").style.fontSize = "25px";
      document.getElementById("button2").style.fontSize = "25px";
    }
  }

  function searchTutors() {
    alert('Searching tutors...');
  }

  function resetFilters() {
    document.getElementById('subject').value = '';
    document.getElementById('level').value = '';
    alert('Filters reset!');
  }

  function clearFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    alert('All filters cleared!');
  }

  function contactTutor() {
    alert('Contacting tutor...');
  }

  const tutorData = [
    { 
        name: 'Saikul', 
        description: 'Instills motivation and curiosity...', 
        rate: 355, 
        mode: 'Online', 
        image: 'old.jpeg' 
    },
    { 
        name: 'George', 
        description: 'Experienced in high school tutoring.', 
        rate: 255, 
        mode: 'In-person', 
        image: 'no.jpeg' 
    },
    { 
        name: 'Kardiyak', 
        description: 'Focuses on individual needs.', 
        rate: 155, 
        mode: 'Online', 
        image: 'pros.jpeg' 
    },
    { 
        name: 'Mark', 
        description: 'Passionate about teaching languages.', 
        rate: 300, 
        mode: 'Online', 
        image: 'mark.jpeg' 
    },
    { 
        name: 'Newton', 
        description: 'STEM specialist with years of experience.', 
        rate: 400, 
        mode: 'In-person', 
        image: 'newton.jpeg' 
    },
    { 
        name: 'Elon', 
        description: 'Special education certified.', 
        rate: 280, 
        mode: 'Online', 
        image: 'elon.jpeg' 
    },
    
];

const tutorsPerPage = 3; 
let currentPage = 1;


function renderTutors() {
    const tutorList = document.getElementById('tutors-list');
    tutorList.innerHTML = ''; 

    
    const start = (currentPage - 1) * tutorsPerPage;
    const end = start + tutorsPerPage;
    const tutorsToShow = tutorData.slice(start, end);

   
    tutorsToShow.forEach(tutor => {
        const tutorCard = document.createElement('div');
        tutorCard.className = 'tutor-card';
        tutorCard.innerHTML = `
            <img src="${tutor.image}" alt="${tutor.name}">
            <div class="tt">
                <h3>${tutor.name}</h3>
                <p>${tutor.description}</p>
                <p>Session ₱${tutor.rate} • ${tutor.mode}</p>
                <button class="bot">Contact Tutor</button>
            </div>
            <style>

            .tt{
            color: #FFECB3;
            }
              .bot{
              background-color: #FFECB3;
              color: #550A35;
              font-family: hero;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              }
            </style>
        `;
        tutorList.appendChild(tutorCard);
    });

   
    document.getElementById('prev-button').disabled = currentPage === 1;
    document.getElementById('next-button').disabled = end >= tutorData.length;
}


document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTutors();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage * tutorsPerPage < tutorData.length) {
        currentPage++;
        renderTutors();
    }
});


renderTutors();