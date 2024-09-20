import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hidden lg:flex w-full bg-gray-400 min-h-36 items-center ">
      <div className="flex flex-row w-[87.5%]  mx-auto justify-between items-center">
        <Link
          to={"/panel/pedidos"}
          className="w-[25%] md:w-[15%] max-h-28 rounded-md overflow-hidden cursor-pointer"
        >
          <img
            src="https://i.ibb.co/jgzyDzH/Arrowai-removebg-preview.png"
            alt="Banner"
            className=" rounded-md overflow-hidden cursor-pointer"
          />
        </Link>
        <div className="flex flex-col justify-between items-center h-full  gap-3 ">
          <svg
            width="118"
            height="28"
            viewBox="0 0 118 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="25"
              height="28"
              fill="url(#pattern0_63_1019)"
              name="Insta"
              className="cursor-pointer"
            />
            <rect
              x="31"
              width="25"
              height="28"
              fill="url(#pattern1_63_1019)"
              className="cursor-pointer"
              name="Facebook"
            />
            <rect
              x="62"
              width="25"
              height="28"
              fill="url(#pattern2_63_1019)"
              className="cursor-pointer"
              name="Twitter"
            />
            <rect
              x="93"
              width="25"
              height="28"
              fill="url(#pattern3_63_1019)"
              className="cursor-pointer"
              name="Mail"
            />
            <defs>
              <pattern
                id="pattern0_63_1019"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_63_1019"
                  transform="matrix(0.01 0 0 0.00892857 0 0.0535714)"
                />
              </pattern>
              <pattern
                id="pattern1_63_1019"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image1_63_1019"
                  transform="matrix(0.01 0 0 0.00892857 0 0.0535714)"
                />
              </pattern>
              <pattern
                id="pattern2_63_1019"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image2_63_1019"
                  transform="matrix(0.01 0 0 0.00892857 0 0.0535714)"
                />
              </pattern>
              <pattern
                id="pattern3_63_1019"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image3_63_1019"
                  transform="matrix(0.01 0 0 0.00892857 0 0.0535714)"
                />
              </pattern>
              <image
                id="image0_63_1019"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dV3BU2brfp+o++NEuV9n32mX7wX6wH1zluuWqM8MQlFOn3UE5AyJnEQQiCEQSIBAIZaGcc86BnIYMIqcZGHJOM0T9XGvv3a1utZhz7LI4c6u0qv7VR9279/T6fuv7/t9aLXG++25sjI2xMTbGxtgYG2NjbIyNsTE2xsbYGBtjY2yMjbFhGyuN7f9tjbl3wfKAntwl/j0NywJ6m5YHdDfG+fc0rLD01C8P6Klb4d9Vu9LSXbPK3FO92tRVtdrSXbnW3FmxztRVvs7YVZZo7Cpdb+os2WhsL94kdRRtMXQUJunaC7ZK7flb9e35yYb2umR9R+12XUfNDm1b9U5dW9UubXtlqqatIl3TXpbu11Ga4dNWmunTVpLj3VKc69ValOfdWpjn2VJQ7NWaV+zZnFfi0bynwqM5p9K9ObvKrSWr2r1xW51b0+oG1wZL8/jm//IvGmmioeefYwN7O0IjD7zVTDuG77SjaKYdRRdzBMPUI0hTj2Cechj/KYcJnHyI4OiDhEYdJDzyAFGRB5gccYCp4fuZFr6PGWF7mRW6l7khe5kf3M/C4D5ig/pYEtjLssBeVgT0sNLSzWpLNwnmbhJN3aw3dbPR2EmS1MkWqZNthk526NvZqW8nVdtOmqadTE0bWX5t5Pq0kefTRoF3G0VeLZR4tVDm2UKFRzPVbk3UujfR4NpEk0vjtdaJ9Uk9E2r/63f/UsZGU9f/nB/Ud16KOTKojVEgaGOOyCCGYBzGNPUwlsmH8JdhHCI0+iDhUQeJiDxAdMR+poTvJyZ8H9PD9jIzbC9zQvuZF9LPguB+FgX1sTiwl6WBPcQF9ChA/K1Aulhn6mK9sdMGZJuhg+2GDlL0HezStbNb10a6po1Mvzay/VoVIN4tFHi3UOzVSqlnK+WezVQKIO7NMpB61yYaXRppdmmkZWL9p/YJ9WV7/1L3n777M49Vlp7dQdGHPouAiwwQj9ZskGKUR9OUw7bMCFBhhEQfICz6gAxDyY79TI3YN5QdAkiIHZDgXhYH9ShAAruJ9+9mlaWbNZZu1po7STQJGB1sljrYKnUoQKzZoWsjTdtGhraNLE0rOb6t7PFtJd+nhUIvAaSZUs9myjyalQxxb6LWrYl6tyYaXRtpmdRI26QGOiY20DWh/nXXhNrp3/3Zxi7fa/9qcVD/KRFgEWjLlENy0GVNVR/V560lKnDyQaVMRR8kLEqBERm5n+iIfUyJ2EdMhBVGv5odfSwI6WNRkIChZkegyI5uVvl3s8a/m7WWThItnWwwdbLJ2EGSUQGy3dBOir6NXbo2dmvbSBdANK0KEL8W9vi2UODTTKG3FUgTFR5NVLk32YA0uDbSJIC4NNI+sZHOiQ10T6ind3w9eyc05FUHVP/Dd38WGLFBfddCog8SJDT5oBxsASfQTgHy84fk1wUIa1aERe0nMmo/UZH7mazCmBaxlxlh/XJmzBYwQvuYH9zLwuBeYkVmBPWwLLCb5XJ2dLHKv4s1lk7WmTtZb+5ko6mDTaZ2thjb2WZoJ9nQRoq+lV36VnbrWknXtJKpaZFh5Po2k+fbTIFPE8XezZR6NVEmgHg2UuXRSK1bI/VujXJ2iHLVKoBMapCB9ExooG98HXt/rGP/jzUNfwoocQE9JyKiDhAepQRYGLNY9QKQCHxw9AFZ4mfxfGiUI4jIyH1MjhQg9jI1Yi/Twq0wRGb0MTe0l/mhAkYPscE9LBEwgrpZEdjFykABo5M1/h2stXSw3tLBRlM7m4xtbDG2sVVqI1lqI8WgwtC3kK5tJVPbQramhVw/BUahgOHTRIl3E2VeTVR6NVHt2UitewN17o00uAkYDTKM1kn1NiAiQ/pEhggg42o5+ENN9t8VxnpT+06xqqMjlRUeEakEWZQfGVDUfpvEzxF2EKKi9qsgFBgiK6YLGOF9zArtk2HMC+1lQWiPCqObJUFdxAV1szyoi/iATlYFdCgw/DtItLSxwdLOJlMbSSYBpJVtUis7pFZ26ptJ1beQpmsmQ9dMlraZbL8m9vg1kefbRIFvI0U+TZR6NVLu1UCFZwNVHg3UetRT795Ao1s9Ta4NtLjU0T6pjs6J9XRNqKPHDsiBcbUc+qGWw+NqI/4uMJJ1nf9jdmjfx5hwsbL3yZocsVc2ZBHoaBF0O4mfxfNWCFMj+mVNi+hneni/AiKsj9lhfcwN62V+WA8LQnpYFNJNbEg3S4O6WBbUyfKgTuIDO1gV2MFqGUY76/zbWG9pZZO5lSRTK1tNrSQbW9ghtbDTIGA0k6ZXYeiayNE0k6tpJM9PwGig2LeBUu8GyrwbqPCqp9oORoN7Pc1u9bS61tHuWkeHSx1dE2vpmVAnl6v+8XXs+7FWBnL4hxqO/qXm+eFxdf/+mwNZY+n8SZSVGSKYYf1yqRGrXEi0q6L8DEkJfoz8ej/TZQh98ntnhvcxWyisl7lhPcwL7WF+aLcNxOLgLpYGi8zoYEVQB/GB7TKMNf7trPVvI9G/jY02GC1sNTWTbGxmh7GFFKmJVEMTu/VNpOsbydQ2kq1tUGBoGsj3a6BIAPGpl4FUeNdT5dVAtVc9tR511LvX0uhWS7NrHa2utbS71NI5qZbuSbX0TKylb0KtDGP/uBoOykBqOfp9Dcf+UpPxTWHsMrT/87yQ3i9zwpTSIla1WN0zheTVrqx45dH+Z/G6uLaX2eG9zA7rYU5YjwxCZMR8ASK0m/iYflbF9LNmah8JU3tZN6WX9VN62DC5h02Tu9kc3c2W6C62RnWxPbKTHZGd7IzsIDWig90R7WSEt5MR1kZWaCs5oW3sCWklP6SVouBWSoJaKA1soSywhWK/Okp86yjzqaPCq44qrzqqPWup86yjwaNWVrNbrQOMrkk19E6spn9CDXsnVLN/fA0Hf6yRs+PI99Uck4FUvz/5v+v+wzcDkmRqq14YIkpKL/OEQntl8xWlRmhOqBJsseqtmiMUrgTflglh3ayPPURT2VWuX3zGy2e/8/nTF77V+PLpC+8ev+PhmUeczT1Pe1QHtZ411HvU0OBeQ7N7DS1u1bS6VdPhWi3D6JlUTe/EGvpVGAfGV3Pwx2oOj6vi6A8CiA3Ksm8GZFVAx9PFQd1y1xMb0sPCEKXEyJDUkrNgRHWxMFRc18XONce4cfk5f7bx5Nxj9s/tpdmjilb3atrcquhwraLLpZJulyr6JlWxd0IV+ydUcWB8FQd/rOTIuCqOjavk+A9VHP9eqJqj31ef+CYwMgyN/z0usFM22GXBXSwJ6mRJcKdc6xeHKIoN6STW9jikxaGdrJrSy5kj9xkc5M87BuFe3y906WrpcKuiy7VKhtHrUkn/xCr2TqyUgRz6sYojMpAKGchPP6hQhP5S/fnM/2r4N6MOJE1fP2tlYAcrVC0P6mB5cKcsYbzLgoe0NLjdpmXB7STN38fDu2/4lzLe3n3N4chWelwr6HOpYO+kCvZNrOTAxAoOTajg8IQKjo6r4Kcf7CWgKGCO/aVm4qgDSdU37Fwd0M6aANHttNm0MqideFltxAcPaUVQK/HBrSQv6Oftqw8jTvzl09841nGLsqRjZC7Zy/aYTrZNbiM5uo0d0a2kRLWyK6qFXZHN7I5sJj2ymYzIZjIjmsmOaCInopE94Y3khTdQENpAUWg9JaENlIbUURZcT3lwHZVBtdQE1VIXVEt9QA1NwfX0zGjjSMI+bjZe5bfH70b8bB9evOdISBN7XcrY51LGgYllHJxQzuHx5RwdX8axH8v5aVw5J34QGoIidPT7ysmjDiTNUFe4zr+FtUIBQq0kBKoKamVNYCurA1uGFNTKhugOHt997bwCX76nbc85NoQ0kxjYwIbABjYKBTSw2b+OpIBatvjXsk1WDdstNaQImatJNVex21RFurGKDKmSTKmCbKmCHKmCPH05BfoKCvVlFOvLKdGWUa4to0JbSpVfKdV+pdT5CpXQ6FNCk3cJbZoyBlKP8+Hl786f8/YLDvpWcGBSKYcmlnJ4YinHxpdyfHwpJ34s4+S4Mk4IyVDKhzLl+4rYUQeSaagr22hpYYN/s6KAZhL9m0kUjwHNrBMKbJKVGCgC3cTA4V+dJnn/5gt2zehgY0A9m2QJAAqErSoEAWC7v4BQzU5LFTvNleyWVUGGSaicLFM5OVI5e6Ry8qQy8qUyigxlFOtKKdGVUqYrpVxXQqWmhCpNMbV+xdT5FlPvW0SjbzEt3kW0ehfS7llIh2cR+0NqeHX1qdPnfdxzk8OTijg6sYhj44s5Pr6Ekz+WcHKcUOkQFDVb1BIWP+pAsvQ1pUmWRpIsDYjHzZZGNvmLFd3IpoAGmzb6KypcuV82Sfvx4MZztoc3kBRQQ5J/DVsDatjmXy1ru6wqUvwrSbFUsstSQaq5gt2WCtLM5WSay8g0lZFtKiPHVMYeYyl5xhIKpBIKDcUUGUoo0RdTpi+mXF9EpbaIKm0RNZoi6vwKqfcrpNGvkCbfAlq8C2j3LqDDq4BOrwK6vQro8chnn7aU18OhDMKFGa0cm1jIifGFnBxfyKkfizj1YzGnbFBKVShKthz/vmLlqAPJMVQXJ5saSDbXs82iaKuljq3+9WyxCNWxJUD8rKz0uxefOMzr3cv3ZE5vZZt/Fcn+Vezwr2J7QKUMYKd/Bbv8K0i1lJPqX06apZw0cxkZAoK5lGxzCTnmYnJNJeSZSsg3FVNoLKJQKqJYKqLUUEiZvoByfQGV+gKqdfnUaAuo1eTToMmnUZNPk18ezT55tPrk0W0o5lrhKR4f/YU7DRc5FFJFv0ce+9zzOBZYwccXjuXr1ekHnJiQx8kJ+ZwW+rGA0z+qYMYVO2fL92WjDyRfX1W001RLirmWneZadlhlqVFVrci/mvy5bU6p35dzQg68onJ2+ZeTailjt38ZaZZS0i2lZFhKZQBZlhKyLSXkmovZYyomz1hEnqmQfFMhRcYCWSVSPmVSPuVSPhWGPKr0eVTr8qjR7aFOu4cGWbk0a3Jp8cul1TeHdt9cOjV5vLz8yOGzfXr9nmNB5Rxwz+GQ+x5u7jzk9PkHQmo4PSGPM+OFhqCcdsqWbwVEV16QZqoizVRNqqmKVFMlqeYh7TKLFV5JqqWCQ8VnHCbz5uk70gPFyi8l3V+ohHRLMRmWYjLNRWRbisk2F5JrKSTXXMgecyF55nzyTfkUmPIpNOZTbMyjxJhHmaw9lEu5VMnKodqQQ50+h3pdDg26HJq02bQIabJp1WTR4auoyyeLc4ldjDTu1Z3nsHsWR12zOe6Zy4fHbx1fTzvGuQk5nB2fy9nxexQwP1rBOEL5JkCKdaV5WaKrMVWQaawg01Q+JLm0KCUmw1zKvYGHDpO50HZZCbqliGwBwFxIjqVADn6upYA8cwH55nwZQoE5n0LTHopMeygx76HElEuZKZdyYw6VxmxZ1UJSFrWGLOoMmTQYMmnUZ9Csz6RFl0GLJoN2TQYdmgw6Nen0+GXQ45tBn08G17OdV78Yzw/f5rh7JsfdMjnhksGj+gsOr789fY9zE7KdoYwfXsJKODGudNWoAynTFe4R3cweqZRcYyk5xlK5pgvlmER9LybHXESuuYg3TxxXV/emXjno8qqXlSerwLxHDX4uRaYcis05lJqyKTNnU27KptyYRaVJKFMGUCNl0D61mGNbOzmfe5Brtae5XnuKgZwDnErqpD+6gHbdbjo1qXRrdtOj2U2v3276/FLZ65vKPt9UzsbWjgjkbt5RTrqnc9I1jdOuadyMdyy7n1/9zvkJWX8jlOLRB1Kpy88plIopkIoUGa0qpMBUSKGpQC4vYoV/+ex4UNi8sI5i8x6KzLly0EvMuZSYs+Xgl5qyKDNnUWFSJIJfZcygypRBjTGDWmMaLWG5XCw5yosbj/nDMQivrj/iRtFh9gdkstdvJ/v8Utjvl8JB3xQO+ezksE8KDxrPOq7+Sw8445fGabddnHVL5azLLq5NKXe6/YB7NucnZI4AZhiUcYWjD6Ram5tdaiigVBLKp0RS6nmpcc+QTLlURRQ7TaRuSjFlpizK5aBnykGvMGVQacqgypxOtUkojVpTGnWm3dQZU6k3ptIUkMaF/AN8fOO8aftr4+Pr37iVs4/D+hQO+yZzxCeZ4z7bZf3kvZ0rCyq4m7mPmwlNnPVO4az7ds677eCCawoXXVO4asxxuuclbR4XJmZ8BYrVVwq+DZAGbXZmpWEPQlYzrRQyKHW9QpQXYzYNkYVOE2mKKpADXmNKp8aoBL7WlEqdkAi+aRcNxp00mnbSZEyh2ZRCZ2QWzwacN5b/t+PNpXucDknnuM8WTvps4ZR3Eqe9t3DGeyvnPLdx3mOrrAtuW7nkto1LrslccUnmmpThdK8r+j1cmJjGhYnpnJ/4dSinxxWsHnUgLdqs9Hp9NnWykSqqlTKpk5VBnZQuqy0yz2ki7ZG5NBh30WiyKoUmowj+DppNO2gx7qDVuJ02KZl2YzIH5xXy+xPnIxfr+PDiLc/P3OZR3wVZL07f4uOLt1+//tErLs3M4Yz3Js56b+K8kNdGLnpu4pLnZi65J3HFfTNX3ZK46rqFq65buW5MdwZiyGVg4m4GbFCUbBkO5fT4vNEH0qpJS2vSZ9CkS6fRkEazIZ0mw25FklCqrM4I51TvisykxbjdIejtpm20m7bSYdxGp3ErXcYtdBmT2B+9m9+fvHKO6uAgj/Ze4OyyAg5KGzlk2MAR/QaO6tbLOq7bwKUlBTzbd0G+dvj4+Ogll4O2c9E7kUte67ks5Lmeqx6JXPfYwHX3DVx328h1t81cc0vihnH3CEByuDgplYFJQ1AujAgld/SBdGlTUtt0qbTrU2nT7aJdv4s2g1AKHYYddKiPfRHOqd4fmSYHvduYJAddPPZIQpvoNW6iT9YG9gVs5tUV5zL1272nnFmUzRFpHccM6zimT+C4fi3H9Qmc0CVwUpfAaV0CZzSKrs7P4sO9Z873GfiFa5pErnolcN0rgRuea7npsZZbHuu46Z7IDff13JDBbOKmaZfT+69KWVyctPMPoGRZoYw+kH7NjpRubQrduhS69Sn06HfQo99Ojz6ZHkMyPdI2egxb2R/hvLIOROykX9pEv3ET+6QN7JPWs9+4nn3GRPZLiRyQ1nHQuI5b+c6bttcDP3MydCM/GVZxwrCaE4ZVnNKv5LR+FWdkreScbiXntSu5oF3JgGYlFzXxXA3cwLsLt53u9zSzjZteq7jtuZqfPVfxs+dqbnus4ZbHWm66W8Fs4JYpxem9wlcuuezgkgxlFwMCzAhQzk7IXjPqQPZrk3f065LZq9umagt79VvYa0hirz6JffrN7Ndv4nCE80SORmzjoAi6tI5D0loOGRM4ImsNR4yrZZ0I3cCn147fTbx/+Ixz4Rs4LS3ntGE5ZwzLOWeI47whjgv6ZVzQx3FRt4xLujguaZdxWRvHFe0yrvkt47rfMm4FruPjPccztS9vfuNX0zrueK3gF694fvFcKYMRUG57JKhgErlt3u40D+Erl12SufxXoHwTIMc0m5IPabZwULuZQ7rNHNJv4pBuoyLDBg4b1nPYkMhPEducJnIyIolj0mqOSas4Lq3iJymeE0ahFZyUVnBKWs690k7HNw0Ocm3hTs5LSxkwLGZAWswlw2Iu6sVjLJf1sVzVLeaqLpZruliu62K5KaRZzC1NLLf9YvnZL5aH83Y6ecqrvHbuei3jjtdyBYxnvFO2/Gx2nofwlSuu2+Qu7K9AGX0gx/02bDum3chx7QaOa4WJJnJMt47j+nUc0yVwXLeGE/oEzkRscZrI+YiNctBPSXGclrWUs8alnJOWcM4otJjfbtx1eM/LvSe4LC3ksmEBl6UFXDXM56phAdf187mh6pZ+Hrd087itm8fPuvnc0c7jjnY+v2oU3fOdx33fBfzWf9Lh3h+v3uFX7yX86r2Mu15xMpjh2fKLeavTPISvWLuwISgpTlDOT0gffSBnteuTTmnWcVqzltPatZzWreGMMFKttZbHyxqI2OA0kUsRa7kgLWHAGMuAtIiL0iIGpIVclBZwyTCfGzEJTqv47rJkbhjncFOazS3DLG4L6ZXHn/WzuKOfyV39LH7Vz+RX7Uzuq3qonckD7Swe+c3isZ94nM3zxTucsu9heCL3vBfzq/dS7trADGXLHUuS0zyEr1xz2zwCFMdMOT8hLWHUgVzwW7P5vGYN57WruCArngFdPBd0yxnQxTGgX8aAfilXwhOcJnItYiWXDfO5Is3jqjSXa8a5XDfO4YY0m5vSLB5uzXW4/vPzV/xsnMEvhunckaZxxzCNu4YYfjXEcE8/lQeGGB7oY3ion8ojnaLHuqk81cbwVBfDM00MTzXTeKKZzhO/GTzWzObLC8d9zYvNxdz3WcQ9n8Vqtix1yJa7lk1O8xC+IlrjP4aym4FvAeSKb/zGy5p4LmuXq1rKFe1SpY7rY7mmX8Q1/UJuhsc7TeTniGXclmYpMszgtiQ0jZ+N07hjjOFFboXD9e/PDHBfmsx9KZqHhmgeSVE8MkTyRIriiXg0RPFUH8kzfSTPdVE810XwQhfJC20Uz7XRPNdO5pl2Cs80U21gPp657PDfeFPcxgPfBSqU2KFsUb3lV3/nTP/ZnCy3xn8MRbTEqaMP5Jrf0g03/JZyU7NUNs2bukXc0i3klnY+t3RCc7mln8Od8GVOE7kbsUhe4XelqfwqTeaerGgeyIribX2rI5C+AzyVwngqhcqPz6RQnkshPDeE8NIQwiu9oteyQnklpAvjpS6clzY4CpjnKpj3vUcc/hvv6vt46DuXB77zeeCzUAEjQ1kil7B7/uud5iF8xbpfsYcijF50X6IlFvuUbwLkF9/FiXf8FnFHs0A2z7uygc7hrnYOv+pmcU8/k3v66TyIWOQ0kScRc3kkRfJYiuCxJFZ6OE+sATeG8Htto8P1H/r380oK5JUUwGspgLcGf1nv1Me3hgBVgbwxBPFGH8xrWSEqHAXMS1vWTOZ9nyOQ3+p7eOw3m0e+c3noO48HPtZsUaDcD1jnNI875i22tnhkKNu55JLCxYm71o46kHt+89fd18xB0WzZPB9qp/NQN41Huhge66bwWD+Zp+HznCbyPGIGz6VgnktBvJSCeWkM5JUxQA24hfe5+Q7Xfzlzlt8lo02/2WRSZeadkMGiQhoOR80cOWsUMJ/OXnTMkJImxV9k45+jQLErYfcDnL3wrmWz3SZS2UCOBOWiS8roA3nkN2vtY7+Zcj1+qonhmXaqXKflmq0TtTycl/pwXofPcprIu4ipvJHMvFUDKYL6uyTxu1HIwMetjq3y4IsXvDcZeG/UD5NBvl5+nyTZQRL3HYLzRsDRBw2BMUQw+NLxfOxNUrbqL1Yos20l7L7PQh4ErhkByCZbW+wIZZN8/iX7iavwk+2jD+SJ34y1TzXT5Q7GCuKFLkpegWIliomLsvE2YprTRH6PiFJWu1GSg6oEV8cHWVo+To10ans/rVjMR5NG1gebtPL14n3i/eI+Q4AUONbMsWWNPoh3y4eVn8FBXkbFyvMQi0ssMrHYHtlK2HweBq5ymocwemWvstphV2+D4qpAueyybfSBPNXEJAhzFPVYGKYoA8JERc0WK1FMXATgXcQUp4l8iIyQgycDEEGVA+2nypdPJl8Gb1xzjNmBfj6ZfRSZrPKVr1fep0Iyah3hyJmjZo0K5tOBww73/nztpmz8Skc2RW2TRYs80+Yrj4Ocu8V7/onqXsUeijj/Ws8Nu9L1jYBMSVBgOGaFqNmiRIiJiwD8HhE9ApBQdbVbAYhAe/NZlpesL6XDvkcZHOTL0ll8MXvK+ixLuVa8zwrKCmgIjlra1JL2fkmcU/a9L6xQjd/ajdm1yCqUJ0HLnYEErFP3KSv42XOlfEB5yyNBPpR0MHmXLaMP5LkmOsFWovRhdlkhQPir3mDkfWSE00Q+RgXZQRAB9eSLxUOVO4MWNwYjdPD6peMbH91ncLKkvC7LXb5efp8dJHFfBY6aOdasCQ9l8P59R86vXvM2aLLSkammb+3EhqDM4Gmwc/sujF60xNbN49f85Krb5m8ARBeZ4FCiDCoMyaKatFFemR8iw5wm8jna3w6CCsDfFWS5QIALBLpAUZrTe7l8DqbolWuExPX+rjZIVkC2zLFmTWQQg5cuOmdrTp5i/Krpi8U1EpRnwUuc3vsgMEHZp6ibR+sxizOUbwDkpS5sjQLDWqKsWWFSzVp4hJaPUSFOE/ky2WwHQQ1skAsEu0KIqlBXiPKEawPOUB7+CqtmKNeJ9wS5KgBVQOK+gzYwnnyJm8fgg/vOn+PiRX4zi8+teItYVA5QdENQnofEOn+MwNV2O/o4Jz8ZKl0b1n0DICFr5C5KGLfBXzZNUaKEkcodk0krl4xPUYHOAZ1idIQggh/mCuGuEOEKkW6KotxgnhmeOv6qpzyEDxzphcS5EOGmvN8KSMAJdINV8+BQ34hf4Q4+fsSHqHB58Vi7MbGoxOIaKVOehyx0usejwJV2O3oBZeTS9U2AvNYFrbGHYStRRp1q2L6KR0T7OwdzmlEJnhWCNfjRbjDZDaa4wVRVMe6QMBWejQDFOl69gIun4FA3HOqCgVPKc18bjx/xaf5M2fjF4hGLSCymP4LyInSB822CVsjHLGLjaD1icS5d67jpljj6QN4aAtY4wlBLlMgKk69cv4XRDk42OwdkllHJhKhhAKa5w3R3mKFqpqpZ7rDUBNccf6Ht/2lcGeDzlAB5sSgdmTB90Sb/MZSXoc4nDqLzUjaO1iMW59Ild13fBIjeslqBIQ2D4aO0rRYP2SeI1jsHZb5FAWEPwRr42R4wxwPmqppnp4U+UJcOb4Z1X3/LEB1bfioEeSr+IndkwvT/CIrqKbowXkU4A3katFTdzatHLOqXXMO7rpvuCYmjDuQ3ybTaKTPMw2AIww52g0+fHGciStA0NQusEKzBn+8BC0TwPWGRnWLt/vcKCYcgpkQAAAoVSURBVFpy4c7VEf3BNsRrt65AVQ5M0yhlMlA1frkjU7oxpRMbCcpQ9/V2/krnDDHMHTr3si9dw7LkGwGRViueMQIM0T0J0w5WfWK4KafFKyDmqBCsAETQF3vCEk9YqmrZCFqqXiOuXRcCJRuhowj6a6CvBtqKIG89LAtUPEiURFEeI9QGQnRlTlCGMkXxFNNQ96UP5t36ZEfWr98MnXvZzry+YvDuq78FEP1qxcCHlanhMIRhX3b8+xD2NQyBWGQHQQQ7zguWe8EKL4j/ilaoEteJ662ArFkk7ivuLzJvploSp6pNg7UjE58vYGQoitGr3Zd83BLIx1bHX0n6eO6ybSevHEQOz5Jltiy57fkNgLw36laJDz8ijBC1exKrUqzOmixHIC8ewxJfBYQIZpwdgJVesMoLVnvDGm9IGKY1qsTrq9Tr41U4y1Q44r4i4+arpXCWWh5FtgjvivwaFMXole5Lrx63mHlrDmbwqeMv2v2WWymfeSkHkX+cJbc9V63/BkA0q2zdlNUzrJlhD0N4xWrn4xPqU4dArLQDsNYb1nlDoqr1Ps5KVK9ZawfJCkfcT9zXmjH22fI1KNbyZfZUuy8/9bhFnIEZ+ZDr/PvJr6YuUU+HlaOVkbPE9osSow/ko9Fn1Sdra2sPI2wYjJmqV1w/5zijty9hS4gCIsEOwgYf2OgDm3xgs6okO1mf26ReJ65PtIMj7mfLGLtsEVDE55g5AhSbp7jLO3vhhwoUHe9jpjD4yvG7k0/nLqqnw8ou/utZYtuXfBsg4sOLScjdVJCdZwyHIVbpzrnOHdG9a7DJoKz6jXbB3+ILW31hmy8kj6Bt6uviuiQ7OOtVMNaMsc+WRWoJGw5FeEqotftylc/CrH7yIcTM4M0bjp95cJB3satsG8ahLBnJS5R9yS+ey0cfyGeTZ7zNN8RkQlUYk0eAIUqHqO1n+51L14NrkBamBNcKYIcvpPjCTj9Fu+xkfU68vl29XoajArVmjH22jATFWr5ko1ePXez85NP0MAZvDYMhsmPvAdveZChLhnvJ0L5E2b3HbRh9IGbPxbZSZTVxMTkxSTFZMen5djBECUmU4NHPzlDevYS+dNilU4Ke6ge7/SDND9JHUJr6eqoKZ4cKZ6tdxoisW/sVKFZPsXZfosSGWw8qPRjM2w2vnf8E4ssvv/AuKFLem4iDVSVLoodlidiXKF/7Ws39F8/lo/9XuJ/93WMcSpWYlJicmORsFcYiOxjCcEUp2R2lABhpvHkC55uhfR3UzIGiUCgMhCI7iZ8LAiE/EPICITcAcgIgKwAy/CHNH3b5Q4oFki2wxQybzbDeBGtNsNoI8UaIM8JiCRZbYM1USFkJ3Q3wzPGXsW2V6tVLfp8+U26DbccqunBblihf/Yp9ibVsLbCZ+x2vpbNHHQhmdze5VInsiLArVaLFlI851L1BnB0MUUpErc+KhifOfxrwZx2Dv/zMhxnT5DZ4aAcfbDvnEl/9Kt+bjGTuS/jFa4n36AMJ+OHfEuTyxVaqRHbMsPMN0d2IfUG8CmOdCkOUFOEVaSa4slf5U9k/6xgcZHB/Lx9DzXIbbNvB2865RNkKH8HcrWVrEb96Lx586L7iH0cdiAwlxOWUrauSS5WaHdZSJbocUcNFLd+gmq6AIWr+LtUL6hbC/fP86caF0wzGzRrquGybRXHOpezeh5u7c9kSPhJ7/pvAkIGEuqyweYfIDrErXqhmh7VUiW5nvQpjqx0MYc5ZGsjVQL4W6mLgZB48PA/vv/4HnqM23r5SjnjKM2BRqNw5Dt8sykcq1t37V8qWtduynQJ7x678dkCCPf8j0a7vHbxDZIfYkMWr2WEtVVvUTminmhmZdjCKtFCqgwodVOmhRg8NZmgJgdZQaLOT+Fk83xwCTSFQHwK1wVAVDOVBUBqkmL8wfWH2mQGK0e9UTT7JDBvNkGhn8At9h/Ym0XYdl7+LbV8iH6l8tWxZuy3l+3f5d7p85/DAZ96Hu77zvu3/lQVT3LKcvGOk7BClKkVtVwWMnBFgVOuhTsAwQJMBWgzQOkziuWYDNBqg3gC1egWieL+4T6EW8rSQrYEMjdIai6wU2SnaYdFYCE8TC0Z4nGjL59u1wVOc9yXWI3pr2ZKP5526LfFVr6OPPPCZ/+3/DXimuv8jM9yfy+VquHcMzw5rqRLByhsGQ2RFvV4JdIsB2iTokKBTgi47iZ/bJeV1KxgBUcAU9ylRoezRKiVRZKPISrGBFA2F8LK16k5etOOiE1xot1m07kvU3ftQ2VK+MxnyEaVsid8rcPIRvxk89Jv16rHPwm/3jyg7QJnlHm7bBC77G7JDlKoCrRI8a2YIGE1qFnSowe8xQq8R+uwkfu62A9NiB0VkSrkOinVK9uX8DVmy1G6zOLxsyWdc4jjFw+7Q0Xo0P9xH7HftM3joOyv87wLDBmW+e4ZcrsSqE6vP2lmJI42vZUeZ6hl1w2B0S0rw9xphvxEOmBTtN8E+9XkrGHsoonxV6odK19eyRCwUsWDEwomzL1vuyl5KPuP66z4if81rt2u3Gvtjv+npf1cYMpCAgH9giWeNQ7naZNdZfS07ZANXy5QVRr9RCfxBExw2wRE7HVLhiNcFtC4VSrPqKdV/kCViYYjyuXFY2RILaYFatmw+4mbnI3YHjiblWP4PjL1axOK7P8OQocR7Ztl25fblSqxSsVr3fCU7hCeI4PapWSECf9QEx83wkxlOqI/HzAqYgyoUkSmifLV+JUvEAhALYfewsiUWjFg4K77iI5Gqj9iM3fMPjV3eIGqidv9pYNgPErwjSfR5KZcHUSZ22pUrsWrF6i0fITt61HJ0UIUhAJwywxmLotMWOGlWIB1RM6XfrnTJWaJ6iQBeNKxsiYUhFshmOx9ZofqIOOqZq/rICMb+V4A8e6kLDf3uzzxI0PwTSd65bPf5IPtHhl2ray1XYjWLVS1Wty071DJ1XIVxzgIXLDDgD+ctcFaFIjLl0LAsEWAb7MuWXQts7yOb1e9Ohhu7FUiMCiTsjzutt5Ll/Vt9YNpr34B/992/lEGy938m1W816X4XZCBW/6hUgVjLldU7DqjZIUrUGRXGZX+44g+XVCgiU35Ss0QA7BtWtkTmVdj5iACSPhyIauzyfmSETsseiOi0VCAfjH6ff5f0P/1mMC59azL9fdra/1+DAs0/ka/1oVg7lwptPLW6JBoNSbQZkugyJNFnTOKgMYkj5iROmpM4a07ion8SV/2TuO6fxGX/JC6YkzhtTuIncxJHxL/fZFTeJ97fahD3W06NPo4KbRzF2jjytXFkaePI8I1jl28c23zj2OwdR6J3HGu844j3jGOpZxyLPOOY5x7HLPc4YtzjiHSNI9Q1joBJcQS4xn42eU7+aPaaRIDnv/57x3FsjI2xMTbGxtgYG2NjbIyNsTE2xsbYGBtjY2yMje/+ROP/AOCaLlF0SgCVAAAAAElFTkSuQmCC"
                className="cursor-pointer"
              />
              <image
                id="image1_63_1019"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0ElEQVR4nO2dy0tUURzHb9vqbymjbd6fktJGmHtGlKgxg7CN1CKVMJHcFBEtihZBFG0KgsBFc85Y2sNiypQKKQoLcXR8ZvRypHB8nDiTkIux7jj33nPG+X7gtx3u+X3Oe+7Mz7IAAAAAAAAAAAAAAChS7OrYLnJ4xA6LJpvxk5sywqJJtZFCvMQykcrK+9uIiXZyxBgxIYspbEeM2g5vUzmwTKAsFNtrO2Jad2JIdzh8ikLRMq0yKMQP24wvak8GMyQcnraZOKRFRmmY2+SIBe1JYAZKCfPyQGVQzePtmKbEv8RM7q66uzU4IWoB190TmdlhM3EqIB1yCzGe1N1gKoDdl8pVMOcMAxpMBRDlLLrTdyEU5nW6G0oFEqUsdtB/IQ5v0d1QKpRweIv/Qpjo0N5QVjDRASFMuwQIIf2JhxDSn2wIIQ+SFGnslReuvJXdvRPyzfuvMpFMyc9ffsm5VDprjE/NQwj50FsbW5/L/tezMle+/ViAEPJYxuXr7+TyykrOMiCEeT8yrt4c2pAICPFBxtHmuFxc2tjIgBAfhDwb+CTzBWsI80ZG9ZGHcnk5v9EBIcy70XHm4mDeMiCEeSfkTnQkp6SLB+Pyxu2PmTPK2jh7aTCf58BdFq0mo++lu/UjNZ/OTG9+rGEQwv4mQ53C3fD0xbRfMiCE1iRjeHTOlRDek4SQICKRTLkS0hkbhRAIKcJvDBMYIfolEIToTXpFTZc8cbo/a8zM/nS1hsQHZtb9DBXH2vryecbiOoeE6nuk3wwNf4cQMkiI+mYRI4SZI+TarQ8QQgYJaT//CkLIICH1x59ACBkiZGlpRVbUdkEIGSIkOZnXK0DY9npNvH8GQiiHHlgWFrKqrjtrjE2kXN/2rvcZ+/bfgxDy6NCIuywDTu4EIfoTTxBizl0WQYhZl4sEIRBCuXWM4rp+J4wQCCGMEIERgilLeDV1Yg2h1WTgpG5YJPAakH4JBCH6E08QgnMIYVEXGCE4qQtsewlrCO6yOvH7EOyyPAW3vQK7LMIuCyOEsMvCSX1T/01swoTLxUD+JlZVljEg4VQAQuywOOC/kBAv0Z1schHqZwQNzfH/Rm3DI9+eYU91bIfvQjJSmBjRnXAyPGzGE1ZQqJpLuhtMpocjWoMtAqZqLuluNDMzbIePB1rQRWGHoqUoeSSyjAye1lYcTBXAyjyAAb2STAhVk8vhEUsnqjeomkvak8H0T1OqUJplAmq+VDWX1M5Cd2Io+BhRC3jga4ZbVJmfP4dH3kyOOLcpg6m28Uhg5wwAAAAAAAAAAAAAACzz+A1nNW5bngdKqgAAAABJRU5ErkJggg=="
                className="cursor-pointer"
              />
              <image
                id="image2_63_1019"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,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"
                className="cursor-pointer"
              />
              <image
                id="image3_63_1019"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO2dTYhWVRjHf06pzYyf2SIrEycUQS0/yCS0KF36gaBblyFuXLRIiVRaRbgJdCHKLAaSsKyFDgaBbZIKEjMSRV04SeZ3E2XaNHrkwLnwMr7jzHvuufec+77/Hzybgbnnnud37z3nPPfjBSGEEEIIIYQQQgghhBBCCDEcE4FFwFpgo4KNLhdLgAllHjavAJ8CdwGjoF4O/gU+A+YXLWM7MCAJjPZAtLnaVpSMHRKB7xVhZ2gZr0sGeS7Pg8CckEJ2Swh5x8tNIYV8ICHkFfJWSCEzgNuSgq+Mr4ExFDDdPSMpNDp2fAI8RUGMBbYC/0gMI8k4DbxGSXQBxySF4RaFu4BxRGANcFliyGR8G3p668MUd50cbOFSyi3gHRLDFtV+SiA5psR4APQAz5AoT7pB/+8EkmUKjovAKirC88DhBJJmCioYflTkVLboQf+3BJJoAsUJYB6J0Ob5f5OBPcD9BBJqPONPYLNnDtrdpc1eNYJgN/SDm0UdBKZ7bscukk4lkFzTYBzK0efVQF/N+mQFAdg7ZAf7gS2eR4sd9N+tyEq/z11yfZjuRA7dZjcBqLdhGyeBVz23+RzweQJJN3XCXlr3uWcGGmWMK7PffMzZVpgQG/+7RaHPzuOOwOyUNhWvP80Gjo+w/cKFZPE7sMFz+x1uGjlY0fqTLbi+B9wbRTulCcniCPCiZzsLgR8jyDieo/70BnC2gbZKF2LjjjtinvBoq83VhP4qQcTVHLdVp7px5kGDbUYRkoWd4i7NMUvpSbT+ZB+Iu+bZdlQhtTOWSTnm8ZcCyriQo/7U5W7F5mk/upAsruS4PHS4AXcgUv0pZME0GSG1g/7MHPf0v/do87sc9afFgW8pJCckG/R9p5htDQz6/e7I9qkodBY0FU9SSO0ibJnnPj07wqBvz8QXElysJi0kG/T3uIqwDyuBXuC6i6Pub75F1K8K7GslhGTxR+hHLRusP5W19qmMkCx6gVmUxwLPiULLCDElPdfU7tr4r+S+VVKIcfGLew0iNG8C5yL1qdJCTE2ZY1qAfjztWX+SEMIWArP6042IIprmDDF1HtWc28C+vwR8k8B+N60QUzPojx/FTaPU3hRuSiHGxZlhFoFvA78msH8tJ8TUlGD2u/g5gf1peSEmgURLCPGTKyHET6iEED+JEkL8xElIAskyEhI/QUZC4ifFSEj8RJhEoiVW6qZCISHElyAhxE+8hBA/2RJC/ARLCPGTKiHET6SEED95yQrpTqAjpkniQAghHybQEdMkYR/OCPKkX+yOmCaJ5SGE2LdpzyfQGVPxOOf5ZnJd1ifQIVPxsD9lERR9bhxvGR9T0IstOyr+3StTcthcvV/EV62Hvg37pXukM3aHTaJhc/MF8DIl0um+nLNOP3dE9pNP61xO7Lv1QgghhBBCCCGEEEIIIYQQgkd5CCoSRPoKizZMAAAAAElFTkSuQmCC"
                className="cursor-pointer"
              />
            </defs>
          </svg>
          <span className="font-bold text-[8px] md:text-xs lg:text-sm 2xl:text-base">
            Copyright © 2024 - NoCountry-G25
          </span>
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col gap-3 font-bold text-[8px] md:text-xs lg:text-base 2xl:text-lg">
            <span>Terminos y condiciones</span>
            <span>Politica de privacidad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
