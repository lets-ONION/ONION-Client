import { View } from "react-native";
import OnionCard from "../../components/dictionary/onionCard";

export default function Dictionary() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OnionCard
        onion={{
          onion_image:
            "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
          onion_type: "양파링",
          amount: 4,
          can_trade: true,
        }}
      />
    </View>
  );
}
