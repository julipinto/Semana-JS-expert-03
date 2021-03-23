import data from './../database/data.json';
import FluentSQLBuilder from './fluent.SQL.js';

const result = FluentSQLBuilder.for(data)
  .where({ registered: /^(2020|2019)/ })
  .where({ category: /^(security|developer|quality assurance)$/ })
  .where({ phone: /\((852|850|810)\)/ })
  .select(['name', 'company', 'phone', 'category', 'registered'])
  .orderBy('category')
  .limit(2)
  .build();

console.table(result);
