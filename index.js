// mask before sending to sc  8f1e7b29d3f926a47bf91d51186252ee5fa47699f8760b981758fdeb9f9ecc33
// proof.mask  8f1e7b29d3f926a47bf91d51186252ee5fa47699f8760b981758fdeb9f9ecc33
// amount  1000000000000000000
// this.genCommitment(amount, mask).toString('hex')  036a90d565dc082f6df7eb844d9bff5efc823faf994dc9475327e14d8ce99f1c98
// lfCommitment.getEncoded(true).toString('hex')  030b717d06585502d5234d1f6280d79311e5f444b658c553687ac1df73dff1b579
// 04ba00c453c3bf58141df6dbc70e97da06b8452fb6a56f66e4d89832f85f5b5da0c32aea5f7edeb83390267c11d992d9cde99d68ed9fb2992c3562ae25d31650e1
// var pedersen = require('pedersen-commitments');
var commitment = require('./src/commitment');

console.log(commitment.verifyCommitment(
    1000000000000000000,
    '75676918704181817403655975140203747022269220367197216352041411755527452735237',
    {
        X: '6017449008619539742439834517113378740009023961948335118048083115707101026540',
        YBit: '3'
    })
);

//0fb601754682b69125abe777572c7616a64b0445a68f7cf36e5aec8087d013750a5a978d15bebeacf390f646f17529427c011438524daa1ceb965eaa707e50aa
//69409466220596852594404391063791544074988387980028615983382314962952643000010
//55973764306942302118481091965542413231711438344539662199009044752862867566430