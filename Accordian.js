function Accordian(resource) {
  const container = $(`<div class="accordian"></div>`);
  const header = $(`<button class="accordian-header"></button>`);
  const info = $(`<p class="accordian-info"></p>`);

  header.text(resource.header);
  info.html(resource.text);

  info.hide();
  header.click(() => info.toggle());

  container.append(header, info);

  return container;
}

export {Accordian};