import { Stack } from "react-bootstrap";
import { SelectedItem } from "../../reducers";

export type cartSelectedItem = {
  selectedItem: SelectedItem;
  isEdit: boolean;
};

export const CartSelectedItems = ({ selectedItem, isEdit }: cartSelectedItem) => {
  return (
    <div>
      <Stack key={selectedItem.id} direction="horizontal" gap={3} style={{ marginBottom: "10px", marginTop: "10px" }}>
        <span>
          <small>
            x{selectedItem.quantity} {selectedItem.name}
          </small>
        </span>
      </Stack>
    </div>
  );
};
