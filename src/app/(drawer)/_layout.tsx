import { DrawerContent } from "@/components/drawer-content";
import { CustomOptions } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer
            defaultStatus="open"
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: "75%",
                },
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="(tabs)"
                options={{
                    title: "Todas as caixas de entrada",
                    iconName: "all-inbox",
                    isDivider: true,
                    notifications: 5,
                } as CustomOptions}
            />

            <Drawer.Screen
                name="exit-box"
                options={{
                    title: "Caixa de saída",
                    iconName: "outbox",
                } as CustomOptions}
            />

            <Drawer.Screen
                name="all-emails"
                options={{
                    title: "Todos os e-mails",
                    iconName: "email",
                } as CustomOptions}
            />

            <Drawer.Screen
                name="config"
                options={{
                    title: "Configurações",
                    iconName: "settings",
                } as CustomOptions}
            />
        </Drawer>
    )
}