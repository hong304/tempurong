<template>
	<div class="container-fluid" id="order-history">
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
					<vuetable ref="vuetable"
					          api-url="/api/orderHistory"
					          :fields="tableFields"
					          pagination-path=""
					          @vuetable:pagination-data="onPaginationData">
						<template slot="guests" slot-scope="props">
							<p class="m-0">{{ props.rowData.adults + props.rowData.children }}</p>
						</template>
						<template slot="detail" slot-scope="props">
							<router-link :to="{ name: 'OrderDetail', params: {orderId: props.rowData.id}}"><span
											class="ti-zoom-in"></span></router-link>
						</template>
					</vuetable>
					
					<vuetable-pagination ref="pagination"
					                     :css="paginCss"
					                     @vuetable-pagination:change-page="onChangePage"
					></vuetable-pagination>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

  export default {
    name: 'OrderHistory',
    components: {
      Vuetable,
      VuetablePagination
    },
    data () {
      return {
        tableFields: [
          {name: '__sequence', title: 'ID'},
          {name: 'first_name', title: 'First Name'},
          {name: 'last_name', title: 'Last Name'},
          {name: 'email', title: 'Email'},
          {name: 'check_in', title: 'Check In Date'},
          {name: 'check_out', title: 'Check Out Date'},
          {name: '__slot:guests', title: 'Guests'},
          {name: 'amount', title: 'Total Amount'},
          {name: 'created_at', title: 'Order Time'},
          {name: 'status', title: 'Status'},
          {name: '__slot:detail', title: 'Detail'}
        ],
        paginCss: {
          wrapperClass: 'ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'ti-angle-double-left',
            prev: 'ti-angle-left',
            next: 'ti-angle-right',
            last: 'ti-angle-double-right'
          }
        },
        orderSummarize: {}
      }
    },
    methods: {
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
      this.axios.get(process.env.API_URL + '/api/orderHistorySummarize').then((response) => {
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