const bingxiu_encode_picture = "data:image/webp;base64,UklGRmYZAABXRUJQVlA4IFoZAADwVQCdASqWAJsAPm0qkUWkIqGY/LV0QAbEtgQ4AMmmFl9+QP47zRav/h/7T+mfYp1/dY+VTz//u/u0+aX+6/WL3Jfn3/te4J+r/nWerP+4f7r1CfsF+0fvCf8L9u/cv/Wv897AH9P/zvrY/9X2I/8P/zPYQ/cr03v3g+D7+4/8X91PgQ/bP//+wB/9uBsZD/l/BvwyelP3L9ufWv/wvB11n5kfyT7Z/q/7n6E/8PwV+Mn+Z6gv5V/Pv9N4lOyZsz6Avt/9S/43hO/6Xob9g/+t7gf8//sf/N8s7wb/O/2G+AH+i/33/w/dV9M/9x+2Hn3+pv/f/rvgO/nP96/73+K9uf2VfvP7Q6byKiTls0PUZKPOrHscXE5KrozLuU7SOFN+2TqPmq3pSmguHmqGrlGZgg0f+uW41PqHeG0XcPptphBw+Ldydh7Dc7mcrRzorfUcmYkoQJBUGMGTu+N5T25upea1FVwkOovoEdTzbmCW1i/pjzoiikSRDlPZy0d+TBvIfIhxYYCZYQlFlu50cfAPIhLy9CcFvOOerLRpnYdLjZUfDVheeK5qsOlvY/4xuHY0/rZgNQccdgkBGD+l6jRzNqB9Fvlj5EFLk0tYFDtnhwQFlrbCI0igbAXLy/ZN7kRSZJ3l3cQFmxMzMf4j9eJ7L2GwMRNqgIUMDyA2O/mdH9u9UurddgvE85vEiu73Um7HtAwWd3Ek+EHhIaZ551yuDjwDKh2u9inn5NMtv9k4EjzNca/BzO9XWVCuxS/aBu36f1ApE6gYprU68AoFR+7kTNZJabjaunhAdAoLY3rvCDN/YEecjqzuJLDi2Ydb/wGdHmoR3ljB2DhzsSZC2Dw0svXztzHIkHqSBi57pWCu5LgszFoqhG8W5Po3pMPl/WUnRk1b4cwkdgj2LFdsKynsd/VGcUxlrwAA/v+pRR9tAw/K+0vGjr717vkZ+uspa4F+pq2fGn5zczQgX/hzVhmFu8U5EDhrF92IOu5HyeiDs1Gp/+AuNpfhOaYRa49s7+KkXoCgI86eiSECgT9jttyeUYkVAmvC3GILVSEUs+8sRqRdWrrXbmgl2Aiw2ird7euGwms6gmpCY2KWBNEgs0RHfSypfhhRSvaPatYoWt1KH0PIoZPDvz5zMemmhtBBH6t32cYOC/cBB9+Z3zotjJ+LFbSpVR0o5a3vXsq1bE/xh2ay8vdB5hc5YorNAEPD1/ybw4OPCXCfYJnI8qidUYKAncej8g7f6+J8naxoErCAMMag8OOubzXUTo2xbB6n1UqvKKPWoL7NkrDxNF5UrfaGGUwXlK2Gqn8sWVJipNP/pHy6iYcf+IjCGwYdzEtvbbfKV0ofqwgIPXoIF3ZW84/KwTf/Nx2jUy8Gjx54Cfs2g3mbKfONVfBe3X6K8SZW66wUx1cy0iH96ZjDH+1+PLfmHE/gmdSlZ2SjmhyxxoXXsjlA81S33pSIghwW3XRAuMb8HOlu3xd9zVVq6REuVb6z0ZOara6PAXFeAKpCGJOqelOblPf7mjonXYylryzMMnx6WS/EGHpGX9HBXgVo0aQHkNz/KX3rZmnNDwyoirkkg7Vd1nRfWaQkGjonwZvIivV8qeUT+yKBQ6o2ekcXABQK1JHYLAw9180pjoz/14XzlO8sk1/ct3NzPeuC8TVDbskNWMe+0H5ZqSgYQ3NCAZBx3waQmn/33/oA85gdmzaHueLVExZHkFnKw+5z5o67Yg4J5govkRHZI5L41jr9d8q2jmis2KQ5QraqTVtOuEXdbhAQjTkhGs3Et9yA5uu5oqJOJgtPDQxh3yVMGSu+ep7VkoNQsQEaRwnMsARpoHWBZiopJGDw+hm6uXR1zOvJX7ZWW1I2xDzDYb/UG+nWYiNIag49/txTMIttL7CGL5IAXHN6hXtXU0wu+b17BQk4rWQyGCOye7qy1/oCPK7c45FU0c289lm6HOc5SVwysYEVC77g9nULEll4QcS/emFZ2wza2rO9ShU4ckooduVFpxzia1TBmeKKj5l3c3xrk+CPFxFoEyYg+WHWArG6t0AT0vi4BV9RM7lpzA3/jEbmJz6hE6Rvpha3xlDU3tEm/cARDhp6t1gdrxeUmJAsP/pTUzeawLTNv9kOY+oOKuF2rdJhbvh1wuP6aN8kwej7Qq6wCX6BzRZI/dffOsSIcF9JzYnDVieyXg2U6xqo2MbN8DryQuKADClijhN6KvseG9p/5v/+wZvRvR11I70uMppLkvy5FwipPYrEyrvynQvP0l2zhqZvCfsl4M9PntUe5ymWHC43lRFSar+XDb42Va3e6h0j9FNR/9gvgvGTfm+oVWVU9Fi/nJrdeMZfWFdT6NGxBgevQWfKJHQCLT083iA645fPRqYIHRN7hEBg43hW3gXHvL9ouOfznhlbcfIR1A129+J4vdFhjP1f/jcZaZfzm+xgrq6KQbW+DWfE5OE8BPDmv61HGf7V8dUxEfzo7OaJy9EkIcZpUnKLcPipXGN8gWY/TXPH8Or1uwlp/LHaTO7CYm0mO5PiPJrRZxprzSijvblCT/jPEIB2jpKpkvEzPEyhBAZhcGZ7AJHgTogeuRnIlHYr2b4asxC/jFqKlvIeU9hMpGQ6y81KRnAG0FQoN70I3DwWpuxGOZ5Rb8SgID+Pujss80+EX7Z3PG+42le86228ByxOV/hXkLfArPSR6UtZUpmTQ+kHb4jMhJ4XdcccUHxewxqghrgSNKzN9qOxkCvQtbCZihrIZp1DIDmleAQKk8auA1PoRWiaSAI1F1lXVwAi5wmfIXx4ADkhcm2WHwuYhcy/pRqQ2Dzh/UEkyI3pai+Hr2/Zr4JmYlMU7Hdr2b8/TGIyybznl1AXwTeKtt5PS5mRk/n3nNcuAVybTpT4QqxcmgSTAcwfcHtSJaIDLQ1UaAvuMQvSDqcsWsqlUEGZk0sY3LNE+pOOeafg5pSnQMBuxmIH8iX8w7c7JG7DuUcxuOWpEKCpiDY/YcTiKLSmIfTlCaXrZzPwUnmS0OIOTz9bLNLg36KaDxYE8MyCsUPx5i6dQO38BZTXUjSXuWmEXjZ2soacR0Msu3wHGTNCnQgqB64Do0hfiQvEVWzwLYYUGXKz8ifq32OO6RFED2tKXm5llasydqXwBn993a50AElQw0xY134CfTj+l5aYATYNirHC1209yvRNcUf043L0TzRzadyA5Q1Dd7DQ1MdLpaBfKvWmgXoUorQPzKLc4EeCma/jRuKqkXi9ZKt2O7JAUAqAUPKTfhTBlGvqbto3Kk4i745h9w0exEiyaeuYXWPG4iq5eyxdE8eKvTj4TJI8zYs8/9HpH0+gwqLuEaFB0GkVR4odFacnZFruMWR/B3iOJe3GvFGPEswpiHl6xz+ZXJ+g6VHwOVUQTeCcwg9yDRRPueIbmxupdxSjC8APp5L6ZXDiVFif7CXIu9cpAABeQunYCr3U+F3zT8BWWf7IayJCmYinM1z475C8rVUp0PP8GKS51IqSbmhlv/TA2My8Q7wKo7uCkBgoFRWknRdX58zg5FvmFMztQVpP3rErY7m18xdYyN8DJbaIZNeYukvC/wALzgwGDaeZn+3kfdcmFIgxa2HJzbQpnlb74j7xLQ3Dn5M7gvKOyhfvnZAVO21bphjke4U1bHJcB/uxLTBNdXCC11/Mn8th0rqkt3siSSm1/T+owD0vQuS8R+Fv4ba1kbHJJSVQ1kwGXENY//nw+Wdlbfj5/s70aEAHJE9OcoAxYEj4aBVpRUU+16IvUL5C1621BLJLVO3hvs8NCt8QH1HauqIADSEDc6UhRpZzDzQMFw82jb63RUVP+nPK94SebjByFAXoAnU+GenPMs1QnhqZxT5XyO+aaeMEiAc1fotzxUsKXxe9az0fRIq4Own9JTs82nRN+IQz14165mKuUK/oaYGJI7LmgpXm02Az060Fh/0sgnML3x4Ke+vx4j3imHfJX52vOk5lRBvr9qwuE5cIYJDrbOxti8oAMJv++5+nJxgwuZf8Jk3xjFa8QLfxE5kPxC27t6PYByGm/5QRzZSE7xk7V2tt7hLBMr+9zAuauercfSuRrj6oONmh47wEzkvytggxK9wY8xxMi7XCpA2NzTudg/ABdecf9xpPtu+ynNbhS/8xwmjSRY4qykqqhQ/peLBFpEc9XJg3fParHWQZ87IEUlHfg7+6QD0WS1YEmTAwPKcbYNCjEqCBPLFtaiTLMZan59NZ2vT8qlnhBHiLwJKcYUQNYi3gctKxMNCbGGQS5sL4GezBWSB06FCb6S5mztATTByb9I3KxYp2k1NORwA22rneXfrA69nLAahq+y4BDygz7ayJIaNsaK42UG084BSVUGgSxbVLrqv/0XWkuoC4Y7o4bqdW+c9Rq+CBh7eTP662inj+ULG9WWrX2NmUSXaPNbTl2aebwznUIbQZWiuUNPjfqbxGFyHecs8MBXulbnNdqqIKIBIIejhxVucLwl3I52gDNBv86cR1DGl9OvXXf9tsvM3dcO98KFxOLAOuJ8CCgkv/9PqvfDXa7ngkvludBjH0lZ0aDXcJgEPFc0/ENQwng2bMNrRkvzyUPCWcfW9rix/71S/55NZgavlbEL/WEG/ekWMUG4fKJxAWr7Gi+YM0Ri0vvrDg0o0s6Usxmox93IUbr+sbmTjCc+WZCkbnGxlWiaRJVfvRnBn1cR1lrpCbP/SJaVgq6zL9TjwHBw1/Dls/mrGd4AkgVNe8w/s0oEt/8+nL/Nm91TM/zQQca2iOTBDueQ1YG6Y1YTCHR2+AA0sJDi5J+Dqx9p3KILy7OP2erIdwG6Ow+zX4wxjq/dfcErbxM94ThbTdp/+N7I0i6+8tk0yMJYntgkgpQZ41T98Kc5i6jV95VC6kRkFeKlCWLoW5MdPIBiuwBD8zdHxbn28y2WfEXEZyL4NAp9Nv/uoOu+W9EnkdKMl6fQr3va1GN8jP5xyM577XLuGJ7V1C2galPI5HEWbBgCdH9P+GifLBkvcD5kWW4/SrCQsItMAwrF4x2ntT5fgTJVsa0nhVI86jKAAlGqjwKHYkxt9cESIbsyu47bmrwxnndWK0gBnxYSkqMxg3y5T9LpucqE+Lff/DSY0JNr1dJcwXMkU4ck8zcBGGrVG/MlRroOSlX4/3pbWQE9G1SwjUo6k6lRXVIbRk3VxWC71WilZjSclKB7B06jBoHlsLw6byxYZfWKPZHnBLSKAjj5czwltXaEzDoSbIRPqBAOW3lzHE6jBSHuub7CcW67KLB9EfXL/lN9GzG61OlEoCr6cMkGcxqTUiPR86/MxltpBk55zzNBMEVE2ATr8SACkDt+1UGShsn9TTO51AXvwbHjOTNTY2Rwoq/QsSVGPzIt0UX7tJmC7+XmECM+HsLMATQUO30+WSvWZOPJBNIUNS4vY4lsJHh5uCPNcceKO+GlweJAKm3NybxZIS6EZF56OloSKM3aPl5fShJ1uWHR367GfW2iFmMFWAV9OOGOmUf1cZzPjRNX3CfEdrBl+Od2ME0yZ+BY2/lcety2My3gaqDdDKCNo/LYMFR1gbTGp/widhiio8Uoov5Aw37BNxtBxknTrWhBysQ9dDVRvJcdTgPTjqTIr8vRSOfojBZRehu9/4LCXhCqweDTuecq0a9PCu7CrvPG8skMrMWL6uNIKTtchFV0KS/cY125peieIKo/LUDY8iQl5cO9NbVEJ0vLrIL4aIzch8Y/q5SK9ICcmZwXK6uflgetvjmSC2KpjtYBUvVxgaa4bM8oVfHFOp20ok8VYyu+RAAY+RfJyXBEP6bOG6kywPKOKrLql0QKLb1ShE2IDVpRHj9ZZjj1oyUdx9Pyv7vgEtgunvTJ8EHDXYmSLVwXhXgO0WegLAIaqf19owf7bVLbHtFHxMdP1CQqFh0ADEY6DVEW8GOsXK9v7xdvkV6D+BfusrD+HFiQNIjO4sx8EziEwSM/q7GelctTWDeaEWnHUY1F2I9BBiODkalL2o3v5v+AAjwo5UuEeTYrSt25v63BLjLHqjzsv56w4/DlOjoB1LS1WB2lF4fZNtWSOVWOL0wZJ0NchRz8ikWbgOuOXS7Biklc76DOil3B1a5rjsTlwljVvY45k/8nHVxbY2b2hcY5yPx78+LHe0kZGx9BWVrKbN0Jb6BH3I94NI7NudRHP2oEtqoBvDmiV14q/NshSV7+3BpUlgZGBDY8AulwBpk6wS6yqPp8XWwoqWH6LPdROaLaUrlck49f37COzF/n1wrcWFDcaXT78xR/RajuGzMHIThVOX78bg2aBoeO0bjQkKNQ43yWw1uNdrHCLirjayZA+KAhsRjPaCxQxZ8VM34YeG9vd1X1eQHvTYKxHGpn0FoXInJ2q/71yp3CBZC3PZDsZDxHo7L6h9koeYziX1Yo98e2igqR26TrDjkuSAzJfrMCZhP6Cd4rgBwFpDWgcbm++KCLRpsS+DfkRACsVIig7DUm0xLvHa7VMtn2y9exUf+XZJq1uBFR/onOzK0WJX0SqueYMvflV95PlJ4VoBi05K8icCZIhaxyqNVxWrHdU98EAFznxECPe03pF2ojBpFDcX3TOqjFZJmXjHE/ZBQu2xpgQS2Hg78mwfMMuNgAU6nfPz6mgK/MY8PFiRyEzIBEfbX71v5CLcDEmD8y3l5N4XZIWq7q1mpUjQLA3+nZf6gE+uD6zwoh3X6PZX8CjUydk252NgvGHT+n6sDqwcPJMC8L+blQ99yTNbnVCV0qkVWPZkILczA/UIPpaYNR8t3+wEFRtJEmYjr0OqXyNndGuA9lLk0UdXKnGFeNzrpcqvjaLj4FmcSK5trGUMF2RDROeEoPjK7zk14dYihtx0S0vw9s0fDYbKixCjSNk+o0TjfF37tH4PoWtBmocVXypv8TrwHhXYgswEz9dkTOFEoIF3i2q9MBFJ9DlHt+kQi67o4/91JBNt6Yd/Hg+Yxl4DzmW6WqA3z+9X44nDUOFHKsob9+2ZGcfgI1JUx3dLDDehnj2/EbOjGzA6qFh9FvgC0ZF4c3PwKfyI6Txzy3z8ezX08qylfTQbZt2zedSNq8nPLexMBAv79vGVsYAfqtBolPMSaE7FsC1H3uEvu6Nu3zkwgP8zWk+15L2uUrl+SxFJu5g2S2Nw8P0HWFsNw7SzITm4//fmHthxmUklgUy8gAHyrDuuqTlexzvegG6RctX2ZxRbVo8gpqqm5OAubT1pg8sNDSeUw648QucmEBX9BMZ46MaRZsTqf7FRzDywF9N35/pxFPfkNkykdAXvan4rQYxD+YR9ojbXGq1hpA+cfBuc24FJVzHhkb3GcT0VcHufVDfsXTpbpEQ5NpF0hgPU8Qd2Qe1EBLYDM30/cbEarRKjZM0lMrd1AYeWwiEcZFONCwsNwNYSdeDC9P1nA/C83DL8rRJobePh1EuSXz6ksecU0jicGUYetw68dkbuXyIhoonuj3wkn6LYSFpuG+uXYk8kV3u6JvbBSaSRiVdzuWrN7Re34Td4eJfdRDw3oj3O4ucW2Ga/6DXXevj/sXXFJ6VmfC2kRLZNZxNVkk8Xhj0oaeaU+tdvwoKn+Rpk8AJqoEZsKEH4JXsO26nqIYiJEQs09aAojDPU/hsNlrjZfgmQJO1llmam4mV3BmHbzRZU2HDauH2BkQwhJ0R6oGuiScLQI5mwE6emhLSjzjQFnktwvwqaieodSXaa1+Rq1ChpCJRR4nxBDJH3d3Np9GuU+pPNncEyiCIWW39JT11vVWNN/CGM801+k3byPSVJn2TJmQ0UpdTEa0pcPNsbwfDFW+D5waqcrIzGyUI+jxXxFaFhGEC2OgQw4bO7LbcJY5BCqZIr5S1BN2vQfiQWPPuRZnM1WL0PpXdu4EY6f43gyEatnto2pV/Vu59jACpCOIl5YEYPrnLil2wuOil/9UsJL/dX75ET7MJTocCp8XJN/igYEMI5LPclCC5JCgRmoYgU3YN8hjaT8FKo3qp2FloAS+J/JRymi7NXfzkKRfuVqkf5mKpGAbyK57t1F51U6sTh/dVP9tc7Uwn3EXQ7VHlA6JgcCjrKBoH3ueS+rDjWkMn/KQZet0mCZHIpI5rPiwT3rncWSHdFrAbnagyP9EvZmI0y+xdWTfe62Xvy8kiJTPq79towhUibirKE3iu+4BRuPcWwkGB2DKXuujkFDB3Pr9aniH3KvbnRSM77GZvZNAusPQ84FG0fixOJIHdw7IKFlEqoZEoioHbCmvBFDf+L/QggSHCWNTajRsCcCy23yq4s9AkoJ+l2ci/wp2qAt+Gne1Le9+9xOol8omjf/ejOTAFoCAqI33/UjwG14l/RVZf5piizge2plCsnyPfg2xBXFFLbhpQcbJCwJd59U/VPkPBU8XHKeCZM3dYhYUIfKCYHsjZ/zz3zCxikiBfn82ezFdak9xU2NX2TVf9gtv+Bo9w9uJb2QA3Nh15Re+AX2uGyZVFOH2we/kdNizkqUJ7Qpp8a9j7NNaJdofXNrmB1diknXPD+AjLPe7Is5BLwiyWO2hMFNmIurlqh9S8y0ouAEltzcAJpurUDACqOsHnI/3xJ3hclS5d0QgkN/DCxwtGgxi2+aBe4LJEDiFlMqW7IXsfMkwh+pWehY8C5bH9C7BBYufX0/jXs7phGeS5nrFBWLb8SP/QDQnbsYF9g3EAAAAAA";
const bingxiu_encode_icon = "data:image/webp;base64,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";
const bingxiu_encode_extensionId = 'BingxiuEncode';
var w='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
var v='LJVwl=ta0Oe3RqkbE74XH8iF2MTjKAQhm6xGo1zDPBr5uCN+/Ysfvnd9yUIgpSWZc';
var r={};
var l={};
for(var i in w) r[w[i]]=v[i],l[v[i]]=w[i];
class BingxiuEncode{
	constructor(runtime){
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			'zh-cn': {
				'BingxiuEncode.name': 'Bing xiu的加密/解密',
				'BingxiuEncode.encode_from_list': '列表加密[list]',
				'BingxiuEncode.decode_from_list': '列表解密[text]',
				'BingxiuEncode.encode_from_string': '字符串加密[text]',
				'BingxiuEncode.decode_from_string': '字符串解密[text]',
			},
			'en': {
				'BingxiuEncode.name': 'Bing xiu\'s encode/decode',
				'BingxiuEncode.encode_from_list': 'list encode[list]',
				'BingxiuEncode.decode_from_list': 'list decode[text]',
				'BingxiuEncode.encode_from_string': 'string encode[text]',
				'BingxiuEncode.decode_from_string': 'string decode[text]',
			},
		});
	}
	formatMessage(id){
		return this._formatMessage({
			id,
			default: id,
			description: id,
		});
	}
	getInfo(){
		return {
			id: bingxiu_encode_extensionId,
			name: this.formatMessage('BingxiuEncode.name'),
			blockIconURI: bingxiu_encode_icon,
			menuIconURI: bingxiu_encode_icon,
			color1: '#9C2958',
			color2: '#7d103a',
			blocks: [
				{
					opcode: 'encode_from_list',
					blockType: 'command',
					text: this.formatMessage('BingxiuEncode.encode_from_list'),
					arguments: {
						list: {
							type: 'list',
							defaultValue: '',
						},
					}
				},
				{
					opcode: 'decode_from_list',
					blockType: 'command',
					text: this.formatMessage('BingxiuEncode.decode_from_list'),
					arguments: {
						text: {
							type: 'string',
							defaultValue: '95etp1/ccyRS2e2S2BetpGmycyRycc2SpG2tjcUtpGRccMeocieAcyRS2e2A5L2SpGRtp1/ycyRype2BpGRbcyRype2S/u/tpGRb',
						},
					}
				},
				{
					opcode: 'encode_from_string',
					blockType: 'command',
					text: this.formatMessage('BingxiuEncode.encode_from_string'),
					arguments: {
						text: {
							type: 'string',
							defaultValue: 'Bingxiu\'s Encode',
						},
					}
				},
				{
					opcode: 'decode_from_string',
					blockType: 'command',
					text: this.formatMessage('BingxiuEncode.decode_from_string'),
					arguments: {
						text: {
							type: 'string',
							defaultValue: '95ehp1/c+GRS2e8S2BehpGmy+GRycc8SpG2hjcUhpGRc+Beo+oeA+GRS2e8A5L8SpGRhp1/y+GRyp7ff',
						},
					}
				},
			],
			menus: {},
		};
	}
	encode_from_list(x){var y='',p='',q='';x.forEach(function(e){for(var i in e) y+=e[i].charCodeAt().toString()+'+';if(e.length==0) y+='+=';else y+='=';});y.substr(0,y.length-2).split('').forEach(function(e){p+=r[e];});btoa(p).split('').forEach(function(e){q+=l[e];});return q;}
	decode_from_list(x){var p='',q='',t=[];x.split('').forEach(function(e){p+=r[e];});atob(p).split('').forEach(function(e){q+=l[e];});q.split('+=').forEach(function(e){var s='';e.split('+').forEach(function(_){s+=String.fromCharCode(parseInt(_));});t.push(s);});return t;}
	encode_from_string(x){var m=[],p='',q='';x.split('').forEach(function(e){m.push(e.charCodeAt());});m.join('/').split('').forEach(function(e){p+=r[e];});btoa(p).split('').forEach(function(e){q+=l[e];});return q;}
	decode_from_string(x){var p='',q='',t='';x.split('').forEach(function(e){p+=r[e];});atob(p).split('').forEach(function(e){q+=l[e];});q.split('/').forEach(function(e){t+=String.fromCharCode(parseInt(e));});return t;}
}
window.tempExt = {
	Extension: BingxiuEncode,
	info: {
		name: "BingxiuEncode.name",
		description: "BingxiuEncode.descp",
		extensionId: bingxiu_encode_extensionId,
		iconURL: bingxiu_encode_picture,
		insetIconURL: bingxiu_encode_icon,
		featured: true,
		disabled: false,
		collaborator: "Bing xiu @ CCW"
	},
	l10n: {
		"zh-cn": {
			'BingxiuEncode.name': 'Bing xiu的加密/解密',
			'BingxiuEncode.descp': '加密/解密工具'
		},
		"en": {
			'BingxiuEncode.name': 'Bing xiu\'s encode/decode',
			'BingxiuEncode.descp': 'encode/decode tool'
		}
	}
}
