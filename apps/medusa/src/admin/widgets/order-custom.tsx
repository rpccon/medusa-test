import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { DetailWidgetProps, AdminOrder } from "@medusajs/framework/types"
import { clx, Container, Heading, Text } from "@medusajs/ui"

const OrderCustomMsjWidget = ({ 
  data: order,
}: DetailWidgetProps<AdminOrder>) => {
  const { items: itemsProductsAssociated } = order;
  const filteredData = itemsProductsAssociated.filter((product: any) => product.metadata?.customMsjField);

  if(!filteredData.length) return (<></>);

  return (
    <><Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Heading level="h2">Custom products details</Heading>
        </div>
      </div>
      <div
        className={clx(
          `text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4`
        )}
      >
        <Text size="small" weight="plus" leading="compact">
          <span className="font-bold">Name</span>
        </Text>
        <Text
          size="small"
          leading="compact"
          className="whitespace-pre-line text-pretty">
            <span className="font-bold">Custom typed message</span>
        </Text>
      </div>
      {filteredData.map((dataProduct: any) => 
        <div
          className={clx(
            `text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4`
          )}
        >
          <Text size="small" weight="plus" leading="compact">
            { dataProduct?.product_title }
          </Text>

          <Text
            size="small"
            leading="compact"
            className="whitespace-pre-line text-pretty"
          >
            {dataProduct.metadata?.customMsjField}
          </Text>
        </div>
      )}
    </Container></>
  )
}

export const config = defineWidgetConfig({
  zone: "order.details.before",
})

export default OrderCustomMsjWidget