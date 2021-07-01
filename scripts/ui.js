class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = '';
  }
  render(data) {
    const when = dateFns.distanceInWordsToNow(
      data.created_at.toDate(), {
        addSuffix: true
      }
    );
    const html = `
      <li class="message">
        <span class="message-name">${data.username}</span> ${data.message}
        <span class="message-timestamp">${when}</span>
      </li>
    `;

    this.list.innerHTML += html;
  }
}