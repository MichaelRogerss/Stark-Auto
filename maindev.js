console.log("Website built by Michael Rogers")

var email = null
var number = null
var namee = null



  // Replace these with your actual API Key and Token
  const apiKey = '3f81955c9393ecd967c334ca5bb284ae';
  const token = 'ATTA239310e32f991a35281021fb329f1e25e51d29563134be96ecf7447acd90dcc41474FFED';
  
  // Replace these with your actual board and list IDs
  const boardId = "66f1f43fe73bde709aaf400c";
  const listId = "66f1f43fba3de9eaf8c250b2";
  
  // Function to create a new card on Trello
  function createCard(cardName, cardDescription) {
      const url = `https://api.trello.com/1/cards`;
  
      const params = new URLSearchParams({
          key: apiKey,
          token: token,
          idList: listId,
          name: cardName,
          desc: cardDescription
      });
  
      fetch(`${url}?${params}`, {
          method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
          console.log('Card created:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }

  
document.getElementsByClassName("quotebutton")[0].addEventListener('click', function() {
    email = document.getElementById("quotemail").value
    document.getElementById("section1").style.display = "none"
    document.getElementById("section2").style.display = "flex"
    
  });

  document.getElementsByClassName("quotebutton")[1].addEventListener('click', function() {
    namee = document.getElementById("quotename").value
    number = document.getElementById("quotenumber").value
    document.getElementById("section2").style.display = "none"
    document.getElementById("sectionend").style.display = "flex"
    createCard(namee, email+"\n"+number);
  });
