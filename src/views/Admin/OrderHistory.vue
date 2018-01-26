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
					<v-server-table :url="apiUrl" :columns="columns" :options="options"
													@filter="onFiltered"
					></v-server-table>
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
        apiUrl: process.env.API_URL + '/api/orderHistory',
        columns: ['id', 'first_name', 'last_name', 'email', 'check_in', 'check_out', 'guests', 'amount', 'created_at', 'status', 'detail'],
        options: {
          orderBy: { ascending: false, column: 'created_at' },
          requestFunction: function (data) {
            return this.axios({
              method: 'post',
              data: data,
              url: process.env.API_URL + '/api/orderHistory',
              withCredentials: true
            }).catch(function (e) {
              this.dispatch('error', e)
            }.bind(this))
          },
          responseAdapter: function (resp) {
            var d = resp.data
            return {
              data: d.data,
              count: d.count
            }
          }
        },
        orderSummarize: {},
        baseUrl: process.env.API_URL
      }
    },
    methods: {
      onFiltered (data) {
        console.log(data)
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      editRow (rowData) {
        alert('You clicked edit on' + JSON.stringify(rowData))
      },
      deleteRow (rowData) {
        alert('You clicked delete on' + JSON.stringify(rowData))
      },
      logData () {
        console.log(this.orderData)
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

	.vuetable {
		text-align: left;
		border: 1px solid rgba(34, 36, 38, .1);
		padding: 2rem;
		thead {
			color: white;
			text-transform: uppercase;
			font-weight: bold;
			border-bottom: 3px solid rgba(34, 36, 38, .3);
			tr {
				th {
					padding: 1.5rem;
					background-color: #6D7580;
					border: none;
					&:first-of-type {
						border-left: none;
					}
					&:last-of-type {
						text-align: center;
						border-right: 1px solid #6D7580;
					}
				}
			}
		}
		tbody {
			tr {
				td {
					padding: 1em;
					color: #6D7580;
					font-weight: 400;
					border-left: none;
					&:last-of-type {
						border-left: 1px solid rgba(34, 36, 38, .1);
						text-align: center;
						a {
							padding: 0.5rem;
							color: #6D7580;
							border-radius: 0.5rem;
							transition: all 250ms linear;
							&:hover {
								text-decoration: none;
								color: white;
								background-color: #6D7580;
							}
						}
					}
					&:first-of-type {
						border-left: none;
					}
				}
			}
		}
	}

	.pagination {
		.item {
			padding: 5px 7px;
			margin: 0 5px;
			color: white;
			background-color: $brand-primary;
			border-radius: 5px;
			&.icon {
				padding: 5px;
			}
			&.active {
				background-color: $brand-secondary;
			}
			&:hover, &:focus {
				background-color: $brand-secondary;
				text-decoration: none;
				cursor: pointer;
			}
			i {
				position: relative;
				top: 1px;
			}
		}
	}
</style>