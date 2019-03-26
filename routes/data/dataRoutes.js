const Obj = require('../../models/object');
const newObj = require('../../models/newobject');

let params = {
  Exchange: 'KRAKEN',
  Quote: 'USD',
  Base: 'BTC'
}

async function searchTime(isStart) {
  return Obj.findOne({})
    .where('Exchange', 'KRAKEN')
    .where('Quote', 'USD')
    .where('Base', 'BTC')
    .sort({ 'TimeStart': isStart ? 1 : -1 })
    .lean()
    .limit(1)
    .exec()
}

function pushToArr (resObject, date){
  resObject[ date.getDate() ].push([
    document.TimeStart,
    document.PriceOpen,
    document.PriceHigh,
    document.PriceLow,
    document.PriceClose
  ]);
}

module.exports = {
  data: async function (req, res, next) {
    let cursor = Obj
      .find()
      .where('Exchange', params.Exchange)
      .where('Quote', params.Quote)
      .where('Base', params.Base)
      .lean()
      .cursor();
    let resObject = {};
      while (document = await cursor.next() ) {
        const date = new Date (document.TimeStart);
        if (resObject.hasOwnProperty(date.getDate())) {
          pushToArr(resObject, date);
        } else {
          resObject[ date.getDate() ] = [];
          pushToArr(resObject, date)
        }
      }
      Object.keys(resObject).forEach(key=>{
        new newObj({
          Exchange: params.Exchange,
          Base: params.Base,
          Quote: params.Quote,
          Values: resObject[key],
        }).save();
      })
      res.json('Done')
  }
}

