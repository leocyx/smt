//var Application = require('spectron').Application
var assert = require('assert')
var M = require("../work")

describe('application launch', function () {
    it('show total eat add100',function(){
      assert.equal('100',M.eat('100'))
     })
    it('show total traffic add50',function(){
         assert.equal('150',M.traffic('50'))
    })
    it('show total add10',function(){
     assert.equal('160',M.leisure('10'))
    })
    it('show date and description and money',function(){
        assert.equal('1/14 | 搭捷運 | 15元',M.event_description('搭捷運','15'))
       })
       it('show date and description and money',function(){
        assert.equal('1/14 | 午餐 | 65元',M.event_description('午餐','65'))
       })
       it('show date and description and money',function(){
        assert.equal('1/14 | 買衣服 | 790元',M.event_description('買衣服','790'))
       })
})