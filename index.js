const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const data = {
  "system_size": 74.34,
  "annual_production": "93.60 MWh",
  "payback_period": 12,
  "lifetime_saving": 4808.9400000000005,
  "yearly_saving": [
    785.03,
    706.53,
    635.87,
    572.29,
    515.06,
    463.55,
    417.2,
    375.48,
    337.93,
    0.0
  ],
  "montyly_gen_graph_data": [
    6825.206,
    6976.814,
    8574.422,
    8706.063,
    8911.942,
    8153.117,
    7739.349,
    7836.062,
    7851.336,
    7905.783,
    7199.763,
    6917.258
  ]
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/api', (req, res) => res.send(data))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
