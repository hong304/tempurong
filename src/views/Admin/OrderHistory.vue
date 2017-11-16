<template>
	<div class="container" id="order-history">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row">
				<div class="col-xs-12">
					<h1>Order History</h1>
					<vuetable ref="vuetable"
										api-url="/api/orderHistory"
										:fields="tableFields"
										pagination-path=""
										@vuetable:pagination-data="onPaginationData"
					></vuetable>

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
          {name: 'first_name', title: 'First Name'},
          {name: 'last_name', title: 'Last Name'},
          {name: 'email', title: 'Email'},
          {name: 'check_in', title: 'Check In Date'},
          {name: 'check_out', title: 'Check Out Date'},
          {name: 'guests', title: 'Guests'},
          {name: 'amount', title: 'Total Amount'},
          {name: 'created_at', title: 'Order Time'},
          {name: 'status', title: 'Status'}
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
        }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.button {
		background: none;
		border: none;
	}
</style>

<style lang="scss">
	@import '../../assets/style/setting';

	.vuetable {
		text-align: left;
		border: 1px solid rgba(34, 36, 38, .1);
		padding: 2rem;
		thead {
			color: $brand-secondary;
			text-transform: uppercase;
			font-weight: bold;
			tr {
				th {
					padding: 1.5rem;
					background-color: #f5f5f5;
					border-left: 1px solid rgba(34, 36, 38, .1);
					&:first-of-type {
						border-left: none;
					}
				}
			}
		}
		tbody {
			tr {
				td {
					padding: 1em;
					color: $brand-secondary;
					font-weight: 100;
					border-left: 1px solid rgba(34, 36, 38, .1);
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