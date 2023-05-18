function showCard(event) {
    const isMobile = isMobileDevice();

    if (!isMobile) {
      const card = document.getElementById('card') ;
      card.style.display = 'block';
    }
  }

  function hideCard(event) {
    const isMobile = isMobileDevice();

    if (!isMobile) {
      const card = document.getElementById('card');
      card.style.display = 'none';
    }
  }

  function toggleCard(event) {
    const isMobile = isMobileDevice();
    const card = document.getElementById('card');

    if (isMobile) {
      if (card.style.display === 'none') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  }

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
//-----------------------------------------------------
  function showCard1(event) {
    const isMobile1 = isMobileDevice1();

    if (!isMobile1) {
      const card1 = document.getElementById('card1') ;
      card1.style.display = 'block';
    }
  }

  function hideCard1(event) {
    const isMobile1 = isMobileDevice1();

    if (!isMobile1) {
      const card1 = document.getElementById('card1');
      card1.style.display = 'none';
    }
  }

  function toggleCard1(event) {
    const isMobile1 = isMobileDevice1();
    const card1 = document.getElementById('card1');

    if (isMobile1) {
      if (card1.style.display === 'none') {
        card1.style.display = 'block';
      } else {
        card1.style.display = 'none';
      }
    }
  }
  function isMobileDevice1() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }


  //-----------------------------------------------------

  function showCard2(event) {
    const isMobile2 = isMobileDevice2();

    if (!isMobile2) {
      const card2 = document.getElementById('card2') ;
      card2.style.display = 'block';
    }
  }

  function hideCard2(event) {
    const isMobile2 = isMobileDevice2();

    if (!isMobile2) {
      const card2 = document.getElementById('card2');
      card2.style.display = 'none';
    }
  }

  function toggleCard2(event) {
    const isMobile2 = isMobileDevice2();
    const card2 = document.getElementById('card2');

    if (isMobile2) {
      if (card2.style.display === 'none') {
        card2.style.display = 'block';
      } else {
        card2.style.display = 'none';
      }
    }
  }
  function isMobileDevice2() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

