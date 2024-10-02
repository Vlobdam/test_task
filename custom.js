function addComment() {
  let text = document.forms['commentform']['fcomment'].value

  text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  let ref = document.getElementById('comment_list')

  const html = `<div class="comments" style="display:block">
              <div class="profile">
                <img src="https://robohash.org/${btoa(text)}"></div>
              <div class="comment-content">
                <p class="name">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Anon</font>
                  </font>
                </p>
                <p>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${text}</font>
                  </font>
                </p>
              </div>
              <div class="clr"></div>
              <div class="comment-status">
                <span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Curte·comente</font>
                  </font>
                  <img src="assets/like.webp" width="15px" height="15px">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">0</font>
                  </font>
                </span>
                <font style="vertical-align: inherit;">
                  <small>
                    <font style="vertical-align: inherit;">·</font>
                  </small>


                  <small>
                    <u>
                      <font style="vertical-align: inherit;">0 minutos antes</font>
                    </u>
                  </small>
                </font>
                <small>
                  <font style="vertical-align: inherit;"></font>
                  <u>
                    <font style="vertical-align: inherit;"></font>
                  </u>
                </small>
              </div>
            </div>`

  ref.insertAdjacentHTML('afterbegin', html)
  return false
}

const arrayOfAnswers = [];

$('.bq1, .bq2, .bq3, .bq4').on('click', function() {
  arrayOfAnswers.push(this.innerText)
})

function log() {
  for (let i = 0; i < arrayOfAnswers.length; i++) {
    console.log(arrayOfAnswers[i])
  }
}