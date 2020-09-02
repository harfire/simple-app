<template>
  <div>
    <h1 class="title is-3">{{ title }}</h1>
    <p class="space">Calculate Sum, Multiply, Prime Number, and Fibonacci</p>

    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="bg-box">
            <h5 class="title is-5">Sum</h5>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input sum" v-model.number="sumLeft" type="number" placeholder="Input Number" />
                <input class="input sum" v-model.number="sumRight" type="number" placeholder="Input Number" />
              </p>
            </div>
            <div class="result">Result: {{ fnSum(sumLeft, sumRight) }}</div>
          </div>
        </div>
        <div class="column">
          <div class="bg-box">
            <h5 class="title is-5">Multiply</h5>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input sum" v-model.number="multiplyLeft" type="number" placeholder="Input Number" />
                <input class="input sum" v-model.number="multiplyRight" type="number" placeholder="Input Number" />
              </p>
            </div>
            <div class="result">Result: {{ fnMultiply(multiplyLeft, multiplyRight) }}</div>
          </div>
        </div>
        <div class="column">
          <div class="bg-box">
            <h5 class="title is-5">Prime Number</h5>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model.number="primeNumber" type="number" placeholder="Input Number" />
              </p>
            </div>
            <div class="result prime">Result: {{ getPrimeNumber(primeNumber) }}</div>
          </div>
        </div>
        <div class="column">
          <div class="bg-box">
            <h5 class="title is-5">Fibonacci</h5>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model.number="fibonacci" type="number" placeholder="Input Number" />
              </p>
            </div>
            <div class="result prime">Result: {{ fnFibonacci(fibonacci) }}</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p class="footer"><strong>Haris Rahman</strong>&nbsp;<small>|</small>&nbsp;<small>+628159156249</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-app',
  data() {
    return {
      title: 'Simple App',
      sumLeft: undefined,
      sumRight: undefined,
      multiplyLeft: undefined,
      multiplyRight: undefined,
      primeNumber: undefined,
      fibonacci: undefined
    };
  },
  methods: {
    fnSum(leftValue, rightValue) {
      if (leftValue & rightValue) {
        return leftValue + rightValue;
      }
      return '';
    },
    fnMultiply(leftValue, rightValue) {
      if (leftValue & rightValue) {
        return leftValue * rightValue;
      }
      return '';
    },
    checkPrimeNumber(val) {
      if (val < 2) {
        return false;
      }

      for (let i = 2; i < val; i += 1) {
        if (val % i === 0) {
          return false;
        }
      }

      return true;
    },
    getPrimeNumber(val) {
      let arrPrima = [];
      let initNum = 2;

      while (arrPrima.length < val) {
        if (this.checkPrimeNumber(initNum)) {
          arrPrima.push(initNum);
        }

        initNum += 1;
      }

      return arrPrima.toString();
    },
    fnFibonacci(val) {
      if (val) {
        let arr = [0, 1];

        for (let i = 2; i <= val; i++) {
          arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr.toString();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-bottom: 100px;
}
.bg-box {
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #7a7a7a;
  font-weight: 600;
  padding: 1.25rem;
  text-align: left;
}
.space {
  margin-bottom: 30px;
}
.result {
  clear: both;
  margin-top: 20px;
}
.centered {
  text-align: center;
}
.sum {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
}
.result.prime {
  width: 230px;
  word-break: break-all;
}
.footer {
  padding: 30px 0;
  background-color: #fff;
}
</style>
