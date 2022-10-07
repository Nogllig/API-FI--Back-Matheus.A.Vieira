import { SistemaMAVController } from "./controller/SistemaMAVController"
import { UserMAVController } from "./controller/SistemaMAVController"

export const Routes = [{
    method: "get",
    route: "/SistemaMAV",
    controller: SistemaMAVController,
    action: "all"
}, {
    method: "get",
    route: "/SistemaMAV/:id",
    controller: SistemaMAVController,
    action: "one"
}, {
    method: "post",
    route: "/SistemaMAV",
    controller: SistemaMAVController,
    action: "save"
},
{
    method: "put",
    route: "/SistemaMAV/:id",
    controller: SistemaMAVController,
    action: "update",
}, {
    method: "delete",
    route: "/SistemaMAV/:id",
    controller: SistemaMAVController,
    action: "remove"
}, {
    method: "get",
    route: "/UserMAV",
    controller: UserMAVController,
    action: "all",
}, {
    method: "get",
    route: "/UserMAV/:cod",
    controller: UserMAVController,
    action: "one",
}, {
    method: "put",
    route: "/UserMAV/:cod",
    controller: UserMAVController,
    action: "update",
},
{
    method: "post",
    route: "/UserMAV",
    controller: UserMAVController,
    action: "save",
},
{
    method: "delete",
    route: "/UserMAV/:cod",
    controller: UserMAVController,
    action: "remove",
},
];

