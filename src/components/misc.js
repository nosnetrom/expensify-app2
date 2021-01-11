import moment from 'moment';

// Miscellaneous helper functions of my own: JHM

export const amountProcessor = (fullAmt) => {
    let extension = '';
    const amt = parseInt(fullAmt) / 100;
    if (fullAmt % 100 == 0) {
      extension = '.00';
    } else if (fullAmt % 10 == 0) {
      extension = '0';
    }
    return `$${amt}${extension}`;
}

export const friendlyDate = (d) => {
    const fd = moment(d).format('DD MMM YYYY');
    return fd;
}
