export const isNumeric = (str: string) => {
  return /^\d+$/.test(str);
};

export const numbersOnly = (e: any) => {
  if (isNaN(e?.key) && e?.key !== 'Backspace') {
    e.preventDefault();
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const monthName = date.toLocaleString('default', { month: 'short' });

  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
};

export const isObjectEmpty = (obj: any) => {
  if (obj === null) return true;
  return Object.keys(obj).length === 0;
};

export const openInNewTab = (url?: string | any) => {
  if (url == null || url?.length < 1) {
    return;
  }
  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if (isChrome) {
    openNewBackgroundTab(url);
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// TODO: Fix open new tab in background, current functon does not work
export const openNewBackgroundTab = (url: string) => {
  var a = document.createElement('a');
  a.href = url;
  var evt: any = document.createEvent('MouseEvents');
  //the tenth parameter of initMouseEvent sets ctrl key
  evt.initMouseEvent(
    'click',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    true,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(evt);
};

export const formatCurrency = (value: any) => {
  if (value) {
    let val = value;
    val = val ? parseFloat(val).toFixed(2) : 0.0;
    return val === 0 ? "₦ 0.00" : `₦ ${Number(val).toLocaleString("en-US")}`;
  }

  return "₦ 0.00";
};
