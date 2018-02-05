<template>
	<div class="container-fluid p-0" id="order-history">
		<section>
			<div class="row m-0 text-left">
				<div class="col-xs-12">
					<h3>Order History</h3>
				</div>
			</div>
			<div class="row m-0 my-5">
				<div class="col-xs-12" id="order-summarize">
					<ul>
						<li>
							<h3>{{ orderSummarize.today_booked }}</h3><span class="ti-bookmark-alt"></span>
							<p>Reservation<br>today</p>
						</li>
						<li>
							<h3>{{ orderSummarize.today_guest }}</h3><span class="ti-user"></span>
							<p>Guests<br>today</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="row m-0">
				<div class="col-xs-12">
					<v-server-table :url="apiUrl" :columns="columns" :options="options">
						<p slot="guests" slot-scope="props" class="mb-0">{{ props.row.adults + props.row.children }}</p>
						<router-link slot="detail" slot-scope="props"
												 :to="{ name: 'AdminOrderDetail', params: {sessionId: props.row.session}}">
							<span class="ti-zoom-in"></span></router-link>

						<template slot="note" slot-scope="props">
							<div v-if="props.row.remarks || props.row.addition_note">
								<btn class="show-note" :id="'btn' + props.row.id"><span class="ti-comment-alt"></span></btn>
								<popover placement="left" trigger="hover" :target="'#btn' + props.row.id">
									<template slot="popover" class="notes">
										<div v-if="props.row.remarks">
											<h5 class="mb-1">Remarks</h5>
											<p>{{ props.row.remarks }}</p>
										</div>
										<div v-if="props.row.addition_note" class="mt-4">
											<h5 class="mb-1">Addition Note</h5>
											<p>{{ props.row.addition_note }}</p>
										</div>
									</template>
								</popover>
							</div>
							<div v-else>
								<p class="mb-0"> - </p>
							</div>
						</template>
					</v-server-table>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  export default {
    name: 'OrderHistory',
    components: {},
    data () {
      return {
        apiUrl: process.env.API_URL + '/api/adminOrderHistory',
        columns: ['id', 'first_name', 'last_name', 'email', 'check_in', 'check_out', 'guests', 'amount', 'created_at', 'payment_status', 'detail', 'note'],
        options: {
          orderBy: {ascending: false, column: 'created_at'},
          requestKeys: {
            query: 'searchItem',
            limit: 'limit',
            orderBy: 'orderBy',
            ascending: 'ascending',
            page: 'page',
            byColumn: 'byColumn'
          },
          pagination: { chunk: 10 },
          requestFunction: function (data) {
            return this.axios({
              method: 'post',
              data: data,
              url: process.env.API_URL + '/api/adminOrderHistory',
              withCredentials: true
            }).catch(function (e) {
              this.dispatch('error', e)
            }.bind(this))
          },
          responseAdapter: function (resp) {
            var d = resp.data
            return {
              data: d.data,
              count: d.total
            }
          }
        },
        orderSummarize: {},
        baseUrl: process.env.API_URL
      }
    },
    created () {
      this.axios({
        method: 'get',
        url: process.env.API_URL + '/api/orderHistorySummarize',
        withCredentials: true
      }).then((response) => {
        this.orderSummarize = response.data
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	h3 {
		font-weight: bold;
	}

	.button {
		background: none;
		border: none;
	}

	.popover-content {
		h5 {
			color: $brand-secondary;
			text-transform: uppercase;
			font-weight: bold;
		}
	}

	.show-note {
		background: none;
		border: none;
		padding: 0;
		color: #337ab7;
	}

	#order-summarize {
		ul {
			list-style-type: none;
			padding-left: 0;
			li {
				display: inline-block;
				text-align: left;
				float: left;
				margin-right: 3rem;
				h3 {
					display: inline-block;
					font-size: 3em;
					margin: 0 0.5rem 0 0;
				}
				span {
					font-size: 1.25em;
				}
				p {
					font-size: 0.9em;
				}
				span, p {
					color: #5D6772;
					text-transform: uppercase;
					font-weight: bold;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
	}
</style>

<style lang="scss">
	@import '../../assets/style/setting';

	.VueTables__search {
		@media screen and (max-width: 320px) {
			max-width: 150px;
		}
	}
</style>