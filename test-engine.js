'use strict';
const assert=require('node:assert/strict'),E=require('./engine');
assert.equal(E.MODES.length,7);
assert.deepEqual(E.MODES.map(x=>x.id),['truco','solitaire','blackjack','poker','buraco','cacheta','maumau']);
for(const m of E.MODES){const g=E.fresh(m.id,()=>.37);assert.equal(g.mode,m.id);assert.ok(g.deck.length>0)}
assert.equal(E.total21([{r:'A',s:'♠'},{r:'K',s:'♦'},{r:'9',s:'♥'}]),20);
assert.equal(E.total21([{r:'A',s:'♠'},{r:'A',s:'♦'},{r:'9',s:'♥'}]),21);
const bj=E.fresh('blackjack',()=>.2);assert.equal(bj.player.length,2);assert.ok(E.act(bj,{t:'hit'},()=>.3).player.length>=2);
const p=E.fresh('poker',()=>.1);assert.equal(p.hand.length,5);assert.equal(E.act(p,{t:'draw'},()=>.2).phase,'done');
const t=E.fresh('truco',()=>.42);assert.equal(t.hands[0].length,3);assert.equal(E.act(t,{t:'play',i:0},()=>.4).hands[0].length,2);
const k=E.fresh('solitaire',()=>.13);assert.deepEqual(k.cols.map(c=>c.length),[1,2,3,4,5,6,7]);assert.equal(E.act(k,{t:'draw'}).waste.length,1);
const m=E.fresh('maumau',()=>.51);assert.equal(m.hand.length,7);assert.ok(E.canLay({r:'5',s:'♠'},{r:'5',s:'♥'}));
const b=E.fresh('buraco',()=>.2);assert.equal(b.hand.length,11);assert.equal(E.act(b,{t:'draw'}).hand.length,12);
assert.ok(E.meldable([{r:'4',s:'♠'},{r:'4',s:'♥'},{r:'4',s:'♦'},{r:'5',s:'♠'},{r:'5',s:'♥'},{r:'5',s:'♦'},{r:'6',s:'♠'},{r:'6',s:'♥'},{r:'6',s:'♦'}]));
console.log('Card game engine tests passed (7 modes).');
