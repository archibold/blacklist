export function calculateDate(date, dateNow) {
  const ONE_DAY = 1000 * 60 * 60 * 24;

  const cdate = new Date(date);
  const days = Math.round(Math.abs(dateNow - cdate)/ ONE_DAY);

  switch (true) {
    case (days === 0): {
      return 'today'
    }
    case (days === 1): {
      return '1 day ago'
    }
    case (days < 31): {
      return days + ' days ago';
    }
    case (days >= 31): {
      switch (true) {
        case (days < 62): {
          return '1 month ago';
        }
        default: {
          const months = (dateNow.getFullYear() - cdate.getFullYear()) * 12 + (dateNow.getMonth() - cdate.getMonth());
          return months + ' months ago';
        }
      }
    }
  }
}
