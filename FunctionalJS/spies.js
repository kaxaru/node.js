function Spy(target, method) {
  var func = target[method],
      res = { count: 0 };

  target[method] = function() {
    res.count++;
    return func.apply(this, arguments);
  }

  return res;
}

module.exports = Spy;